import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./components/nav.tsx";
import './index.css'
import Footer from "./components/footer.tsx";

export default function Homepage() {

    return (
        <div className="">
            <Nav />
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-blue-100">
                <div className="container">
                    <div className="flex flex-col items-center">
                        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                            <div className="w-full max-w-xl">
                                <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                                    Boost Retention<br /> with Seamless Onboarding
                                </h1>
                                <p className="md:text-md">
                                    Create intuitive in-app walkthroughs that engage, educate, and convert without the enterprise price tag.
                                </p>
                                <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                                    <button
                                        className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
                                        title="Button"
                                    >
                                        Button</button
                                    ><button
                                        className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                        title="Button"
                                    >
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full max-w-5xl">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                className="w-full h-auto object-cover rounded-lg"
                                alt="Relume placeholder image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-[5%] py-16 md:py-24 lg:py-28 flex justify-center">
                <div className="container w-full max-w-lg text-center">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Affordable Onboarding That Scales With You</h2>
                    <p className="md:text-md mt-8">Boarding Party is designed to scale with your success—offering powerful onboarding tools at a price every business can afford.</p>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="flex flex-col items-start">
                        <div
                            className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20"
                        >
                            <div>
                               
                                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                                Set Your Users Up for Success from Day One
                                </h2>
                            </div>
                            <p className="md:text-md">
                                Onboarding is essential for retaining customers and turning first-time users into loyal advocates.
                                Boarding Party makes it easy to create interactive, customized, and engaging flows that leave a lasting impression.
                            </p>
                        </div>
                        <div
                            className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
                        >
                            <div>
                                <div className="rb-5 mb-5 md:mb-6">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        className="size-12"
                                        alt="Relume logo 1"
                                    />
                                </div>
                                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                                Seamless Walkthroughs
                                </h3>
                                <p>
                                Guide users effortlessly with interactive, no-code onboarding flows that boost engagement and retention.
                                </p>
                            </div>
                            <div>
                                <div className="rb-5 mb-5 md:mb-6">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        className="size-12"
                                        alt="Relume logo 2"
                                    />
                                </div>
                                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                                Customizable Design
                                </h3>
                                <p>
                                Tailor the look and feel of your onboarding to match your brand, ensuring a consistent and professional experience.
                                </p>
                            </div>
                            <div>
                                <div className="rb-5 mb-5 md:mb-6">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        className="size-12"
                                        alt="Relume logo 3"
                                    />
                                </div>
                                <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-3xl">
                                Actionable Insights
                                </h3>
                                <p>
                                Track user behavior, optimize onboarding steps, and keep your users coming back with data-driven insights.
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
                            <button
                                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                title="Button"
                            >
                                Button</button
                            ><button
                                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0"
                                title="Button"
                            >
                                Button<svg
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="0"
                                    viewBox="0 0 15 15"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                className="w-full object-cover"
                                alt="Relume placeholder image"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                            <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                Medium length section heading goes here
                            </h2>
                            <p className="md:text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero vitae erat.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                                <button
                                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                    title="Button"
                                >
                                    Button</button
                                ><button
                                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0"
                                    title="Button"
                                >
                                    Button<svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 15 15"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div
                        className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
                    >
                        <div>
                            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                Medium length section heading goes here
                            </h1>
                            <p className="mb-6 md:mb-8 md:text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero vitae erat.
                            </p>
                            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                                <div>
                                    <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Subheading one</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                                        eros.
                                    </p>
                                </div>
                                <div>
                                    <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">Subheading two</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                                        eros.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                                <button
                                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                    title="Button"
                                >
                                    Button</button
                                ><button
                                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0"
                                    title="Button"
                                >
                                    Button<svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 15 15"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                className="w-full object-cover"
                                alt="Relume placeholder image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                        <div>
                            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                            <h1 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                Medium length section heading goes here
                            </h1>
                            <p className="md:text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero vitae erat.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                                <button
                                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                    title="Button"
                                >
                                    Button</button
                                ><button
                                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0"
                                    title="Button"
                                >
                                    Button<svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 15 15"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                className="w-full object-cover"
                                alt="Relume placeholder image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                        <div>
                            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
                            <h1 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                                Medium length section heading goes here
                            </h1>
                            <p className="mb-5 text-base md:mb-6 md:text-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                commodo diam libero vitae erat.
                            </p>
                            <ul className="grid grid-cols-1 gap-4 py-2">
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 1"
                                            className="size-6"
                                        />
                                    </div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </li>
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 2"
                                            className="size-6"
                                        />
                                    </div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </li>
                                <li className="flex self-start">
                                    <div className="mr-4 flex-none self-start">
                                        <img
                                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                            alt="Relume logo 3"
                                            className="size-6"
                                        />
                                    </div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                                </li>
                            </ul>
                            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                                <button
                                    className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                    title="Button"
                                >
                                    Button</button
                                ><button
                                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0"
                                    title="Button"
                                >
                                    Button<svg
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-width="0"
                                        viewBox="0 0 15 15"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                className="w-full object-cover"
                                alt="Relume placeholder image"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                        <div>
                            <div className="rb-5 mb-5 md:mb-6">
                                <img
                                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                    className="size-12"
                                    alt="Relume logo"
                                />
                            </div>
                            <h3 className="text-3xl font-bold leading-[1.2] md:text-4xl lg:text-5xl">
                                Long heading is what you see here in this feature section
                            </h3>
                        </div>
                        <div>
                            <div>
                                <p className="md:text-md">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                                    elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                                    commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
                                    Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-24 md:py-24 lg:py-24 flex justify-center">
                <div className="container max-w-lg text-center">
                    <h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                        Medium length heading goes here
                    </h2>
                    <p className="md:text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
                        elementum tristique.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
                        <button
                            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
                            title="Button"
                        >
                            Button</button
                        ><button
                            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                            title="Button"
                        >
                            Button
                        </button>
                    </div>
                </div>
            </section>
            <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container">
                    <div
                        className="rb-12 mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20"
                    >
                        <div className="md:mr-12 lg:mr-0">
                            <div className="w-full max-w-lg">
                                <p className="mb-3 font-semibold md:mb-4">Blog</p>
                                <h1 className="mb-3 text-3xl font-bold md:mb-4 md:text-4xl lg:text-5xl">
                                    Short heading goes here
                                </h1>
                                <p className="md:text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="hidden md:flex md:justify-end">
                            <button
                                className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                                title="View all"
                            >
                                View all
                            </button>
                        </div>
                    </div>
                    <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:gap-y-16 lg:grid-cols-2">
                        <div>
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                                <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                                ><img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                        alt="Relume placeholder image"
                                        className="aspect-square size-full object-cover"
                                    /></a>
                                <div className="flex w-full flex-col justify-center">
                                    <div className="mb-2"><p className="inline-block text-sm font-semibold">Category</p></div>
                                    <a className="mb-2" href="#"
                                    ><h3 className="text-xl font-bold md:text-2xl">Blog title heading will go here</h3></a
                                    >
                                    <p className="line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...
                                    </p>
                                    <div className="mt-5 flex items-center md:mt-6">
                                        <div className="mr-4 flex-shrink-0">
                                            <img
                                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                                alt="Relume placeholder avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-sm font-semibold">Full name</h6>
                                            <div className="flex items-center">
                                                <p className="text-sm">11 Jan 2022</p>
                                                <span className="mx-2">•</span>
                                                <p className="text-sm">5 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                                <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                                ><img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                        alt="Relume placeholder image"
                                        className="aspect-square size-full object-cover"
                                    /></a>
                                <div className="flex w-full flex-col justify-center">
                                    <div className="mb-2"><p className="inline-block text-sm font-semibold">Category</p></div>
                                    <a className="mb-2" href="#"
                                    ><h3 className="text-xl font-bold md:text-2xl">Blog title heading will go here</h3></a
                                    >
                                    <p className="line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...
                                    </p>
                                    <div className="mt-5 flex items-center md:mt-6">
                                        <div className="mr-4 flex-shrink-0">
                                            <img
                                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                                alt="Relume placeholder avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-sm font-semibold">Full name</h6>
                                            <div className="flex items-center">
                                                <p className="text-sm">11 Jan 2022</p>
                                                <span className="mx-2">•</span>
                                                <p className="text-sm">5 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                                <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                                ><img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                        alt="Relume placeholder image"
                                        className="aspect-square size-full object-cover"
                                    /></a>
                                <div className="flex w-full flex-col justify-center">
                                    <div className="mb-2"><p className="inline-block text-sm font-semibold">Category</p></div>
                                    <a className="mb-2" href="#"
                                    ><h3 className="text-xl font-bold md:text-2xl">Blog title heading will go here</h3></a
                                    >
                                    <p className="line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...
                                    </p>
                                    <div className="mt-5 flex items-center md:mt-6">
                                        <div className="mr-4 flex-shrink-0">
                                            <img
                                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                                alt="Relume placeholder avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-sm font-semibold">Full name</h6>
                                            <div className="flex items-center">
                                                <p className="text-sm">11 Jan 2022</p>
                                                <span className="mx-2">•</span>
                                                <p className="text-sm">5 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 md:flex-row md:gap-y-4">
                                <a className="w-full flex-shrink-0 flex-grow basis-2/5 overflow-hidden"
                                ><img
                                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                        alt="Relume placeholder image"
                                        className="aspect-square size-full object-cover"
                                    /></a>
                                <div className="flex w-full flex-col justify-center">
                                    <div className="mb-2"><p className="inline-block text-sm font-semibold">Category</p></div>
                                    <a className="mb-2" href="#"
                                    ><h3 className="text-xl font-bold md:text-2xl">Blog title heading will go here</h3></a
                                    >
                                    <p className="line-clamp-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...
                                    </p>
                                    <div className="mt-5 flex items-center md:mt-6">
                                        <div className="mr-4 flex-shrink-0">
                                            <img
                                                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                                                alt="Relume placeholder avatar"
                                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h6 className="text-sm font-semibold">Full name</h6>
                                            <div className="flex items-center">
                                                <p className="text-sm">11 Jan 2022</p>
                                                <span className="mx-2">•</span>
                                                <p className="text-sm">5 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex justify-end md:hidden">
                        <button
                            className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3"
                            title="View all"
                        >
                            View all
                        </button>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}