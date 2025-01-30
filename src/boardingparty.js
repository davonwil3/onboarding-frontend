


///////////////////////
(function () {
    window.BoardingParty = {
        initialized: false,
        config: {},
        currentStep: 0,
        overlay: null,
        userId: null,

        /** Initialize Boarding Party */
        init: async function ({ apiKey, flowId, mode = "live", userId = null }) {
            if (this.initialized) return;
            this.initialized = true;
            this.userId = userId || this.generateUserId();

            if (this.hasCompletedOnboarding(flowId)) return;

            if (mode === "live") {
                const onboardingConfig = await this.fetchOnboardingData(apiKey, flowId);
                if (!onboardingConfig) return;
                this.config = onboardingConfig;
                this.createOverlay();
                this.startTour();
            }

            window.addEventListener("message", this.receiveEditorUpdates.bind(this), false);
        },

        /** Fetch Onboarding Data */
        fetchOnboardingData: async function (apiKey, flowId) {
            try {
                const response = await fetch(`https://your-api.com/onboarding?apiKey=${apiKey}&flowId=${flowId}`);
                if (!response.ok) throw new Error("Failed to fetch onboarding data.");
                return await response.json();
            } catch (error) {
                console.error("Boarding Party Error:", error);
                return null;
            }
        },

        /** Start the Guided Tour */
        startTour: function () {
            this.currentStep = 0;
            if (!this.config.steps || this.config.steps.length === 0) return;

            this.trackUserActivity();
            this.showStep(this.currentStep);
        },

        /** Show a Specific Step */
        showStep: function (stepIndex) {
            this.removeOnboardingElements();
            if (stepIndex >= this.config.steps.length) {
                this.completeOnboarding();
                return;
            }

            const step = this.config.steps[stepIndex];
            this.highlightElement(step.selector);
            this.scrollToElement(step.selector);

            switch (step.type) {
                case "tooltip":
                    this.createTooltip(step);
                    break;
                case "modal":
                    this.createModal(step);
                    break;
                case "checklist":
                    this.createChecklist(step);
                    break;
                default:
                    console.warn(`Unknown step type: ${step.type}`);
            }
        },

        /** Create Dark Overlay */
        createOverlay: function () {
            this.overlay = document.createElement("div");
            this.overlay.className = "boarding-overlay";
            Object.assign(this.overlay.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(4px)",
                zIndex: "999",
                transition: "all 0.3s ease-in-out",
                pointerEvents: "none"
            });
            document.body.appendChild(this.overlay);
        },

        /** Highlight the Current Element */
        highlightElement: function (selector) {
            const element = document.querySelector(selector);
            if (!element) return;

            const rect = element.getBoundingClientRect();
            this.overlay.style.clipPath = `polygon(
          0% 0%, 100% 0%, 100% 100%, 0% 100%, 
          ${rect.left}px ${rect.top}px, 
          ${rect.left + rect.width}px ${rect.top}px, 
          ${rect.left + rect.width}px ${rect.top + rect.height}px, 
          ${rect.left}px ${rect.top + rect.height}px
        )`;

            element.style.position = "relative";
            element.style.zIndex = "1002";
            element.style.boxShadow = "0px 0px 12px rgba(255, 255, 255, 0.8)";
        },

        /** Scroll to the Highlighted Element */
        scrollToElement: function (selector) {
            const element = document.querySelector(selector);
            if (!element) return;

            element.scrollIntoView({ behavior: "smooth", block: "center" });
        },

        /** Track Active Users for MAU Calculation */
        trackUserActivity: function () {
            fetch("https://your-api.com/track-active-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: this.userId })
            });
        },

        /** Mark Onboarding as Completed */
        completeOnboarding: function () {
            localStorage.setItem(`boardingparty-completed-${this.config.flowId}`, "true");
            this.endTour();
        },

        /** Check if User Has Already Completed This Onboarding */
        hasCompletedOnboarding: function (flowId) {
            return localStorage.getItem(`boardingparty-completed-${flowId}`) === "true";
        },

        /** Generate a Random User ID (If Not Provided) */
        generateUserId: function () {
            let storedUserId = localStorage.getItem("boardingparty-userId");
            if (!storedUserId) {
                storedUserId = `user_${Math.random().toString(36).substr(2, 9)}`;
                localStorage.setItem("boardingparty-userId", storedUserId);
            }
            return storedUserId;
        },

        /** Restart Onboarding */
        restartOnboarding: function (flowId) {
            localStorage.removeItem(`boardingparty-completed-${flowId}`);
            this.startTour();
        },

        /** Create Tooltip */
        createTooltip: function (step) {
            const targetElement = document.querySelector(step.selector);
            if (!targetElement) return;

            const tooltip = document.createElement("div");
            tooltip.className = "boarding-tooltip";
            tooltip.innerHTML = `
          <p>${step.text}</p>
          <button id="next-step" class="boarding-btn">${this.currentStep === this.config.steps.length - 1 ? "Done" : "Next"}</button>
        `;

            Object.assign(tooltip.style, step.styles); // Apply custom styles from the editor
            document.body.appendChild(tooltip);

            function positionTooltip() {
                const rect = targetElement.getBoundingClientRect();
                tooltip.style.top = `${window.scrollY + rect.bottom + 15}px`;
                tooltip.style.left = `${window.scrollX + rect.left}px`;
            }

            positionTooltip();
            window.addEventListener("resize", positionTooltip);

            document.getElementById("next-step").addEventListener("click", () => {
                this.currentStep++;
                this.showStep(this.currentStep);
            });
        },

        /** Create Modal with Image/Video Support */
        createModal: function (step) {
            const modal = document.createElement("div");
            modal.className = "boarding-modal";

            let mediaContent = "";
            if (step.media) {
                if (step.media.type === "image") {
                    mediaContent = `<img src="${step.media.url}" alt="Onboarding Image" style="width: 100%; max-height: 250px; object-fit: contain; border-radius: 8px;">`;
                } else if (step.media.type === "video") {
                    mediaContent = `
              <video controls style="width: 100%; max-height: 250px; border-radius: 8px;">
                <source src="${step.media.url}" type="video/mp4">
                Your browser does not support the video tag.
              </video>`;
                }
            }

            modal.innerHTML = `
            ${mediaContent}
            <h2>${step.title || "Welcome!"}</h2>
            <p>${step.text}</p>
            <div style="display: flex; gap: 10px; margin-top: 10px;">
                <button id="skip-tour" class="boarding-btn" style="background: #dc3545;">Skip</button>
                <button id="next-step-modal" class="boarding-btn">${this.currentStep === this.config.steps.length - 1 ? "Done" : "Next"}</button>
            </div>
            `;

            Object.assign(modal.style, step.styles);
            document.body.appendChild(modal);

            document.getElementById("next-step-modal").addEventListener("click", () => {
                this.currentStep++;
                this.showStep(this.currentStep);
            });
        },

        /** Create Checklist */
        createChecklist: function (step) {
            const checklist = document.createElement("div");
            checklist.className = "boarding-checklist";
            checklist.innerHTML = `
          <h3>${step.title || "Getting Started"}</h3>
          <ul>${step.items.map(item => `<li><input type="checkbox"> ${item}</li>`).join("")}</ul>
        `;

            Object.assign(checklist.style, step.styles);
            document.body.appendChild(checklist);
        },

        /** End the Tour */
        endTour: function () {
            this.removeOnboardingElements();
            if (this.overlay) this.overlay.remove();
        },


        /** Remove All Onboarding Elements */
        removeOnboardingElements: function () {
            document.querySelectorAll(".boarding-tooltip, .boarding-modal, .boarding-checklist").forEach(el => el.remove());
            document.querySelectorAll(".boarding-highlight").forEach(el => {
                el.style.boxShadow = "none";
            });
        },

        /** Handle Messages from the Editor */
        receiveEditorUpdates: function (event) {
            if (!event.data || !event.data.type) return;

            switch (event.data.type) {
                case "previewOnboarding":
                    this.updateOnboarding(event.data.steps);
                    break;
                case "saveOnboarding":
                    this.saveOnboarding(event.data.steps);
                    break;
            }
        },

        /** Update Preview Mode */
        updateOnboarding: function (steps) {
            this.config.steps = steps;
            this.startTour();
        },

        /** Save Onboarding Flow */
        saveOnboarding: async function (steps) {
            await fetch(`https://your-api.com/onboarding/save`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ steps }),
            });
            console.log("Onboarding saved!");
        }
    };
})();

