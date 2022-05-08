import React from 'react';
import "./HeroSection.css";
import package1 from "../../images/package1.svg"
import package2 from "../../images/package2.svg"
import package3 from "../../images/package3.svg"
import package4 from "../../images/package4.svg"
import stepper1 from "../../images/stepper-1.svg"
import stepper2 from "../../images/stepper-2.svg"
import exploreMore from "../../images/button.svg"
import socialLine from "../../images/Line 2.svg"
import facebook from "../../images/facebook.svg"
import insta from "../../images/insta.svg"
import twitter from "../../images/tweeter.svg"
import partner from "../../images/partner.svg"
import headerbg from "../../images/Header-bg.svg"
import bitcoin from "../../images/bitcoin-logo.svg"
import bitcoinBg from "../../images/BitcoinLogoBg.svg"
import heroWave from "../../images/HeroWaves.svg"
import companyLogo from "../../images/CompanyLogo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='header'>
                <img src={headerbg} className="headerbg" alt="" />
            </div>
            <div className="navbar">
                <div className="logo">
                    <h5>Merka</h5>
                </div>
                <div className="menu-items">
                    <ul>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Service</li>
                        <li>Blog</li>
                    </ul>

                </div>
                <FontAwesomeIcon icon={faBars} className="menubar" />
            </div>
            {/* box */}
            <div className="box">
                <p className='box-text'>PK194-ABI</p>
                <p className='location'>San Francisco</p>
                <div className='package-img'>
                    <img src={package1} className="package-1" alt="" />
                    <img src={package2} className="package-2" alt="" />
                    <img src={package3} className="package-3" alt="" />
                    <img src={package4} className="package-4" alt="" />
                </div>
            </div>
            {/* hero text */}
            <div className='banner-content'>
                <div className="hero-text">
                    <h1 className='banner-title'>MERKLABS BLOCKCHAIN DEVELOPMENT AND SECURITY SOLUTIONS</h1>
                    <p className='banner-paragraph'>We provide blockchain development services and also assure you comprehensive security in blockchain development</p>

                    <div className='explore-more-button'>
                        <div className='button'>
                            <img src={exploreMore} className="button-border" alt="" />
                            <p className='button-text'>Explore More</p>
                        </div>
                    </div>
                </div>

                <div className='bitcoin-logo'>
                    <img src={bitcoin} className="bitcoin" alt="" />
                    <img src={bitcoinBg} className="bitcoinbg" alt="" />

                </div>

            </div>

            {/* stepper text */}
            <div className='stepper-status'>
                <div className='stepper'>
                    <img src={stepper1} className="stepper-1" alt="" />
                    <img src={stepper2} className="stepper-2" alt="" />
                    <img src={stepper2} className="stepper-3" alt="" />
                    <img src={stepper2} className="stepper-4" alt="" />
                    <img src={stepper2} className="stepper-5" alt="" />

                </div>
            </div>

            {/* social media icon */}
            <div className="social-media">
                <div className="icons">
                    <img src={facebook} className="facebook" alt="" />
                    <img src={insta} className="insta" alt="" />
                    <img src={twitter} className="twitter" alt="" />
                </div>
                <div>
                    <img src={socialLine} className="line" alt="" />
                </div>
            </div>

            {/* hero waves */}
            <div className='hero-waves'>
                <img src={heroWave} className="wave" alt="" />
            </div>

            <div className='partner'>
                <div className='partner-container'>
                    <img src={partner} className="partner-box" alt="" />
                    <p className='partner-section-title'>Trusted by Leading Dapp Teams and Enterprises</p>
                    <div className='company-logo'>
                        <img src={companyLogo} className="companyLogo" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;