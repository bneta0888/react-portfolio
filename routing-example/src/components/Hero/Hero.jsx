import { TypeAnimation } from "react-type-animation";
import './hero.css';
import pic from "../../assets/pic.png";

export default function Hero() {
    return(
        <>
            <section className="hero">
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h5 className="greetings">Greetings</h5>
                                <div className="space"></div>
                                <div className="text-change">
                                    <span className="me">I'm {' '} </span><br />
                                    <div className="dynamic-text">
                                        <TypeAnimation 
                                            sequence={[
                                                "Binita Shrestha", 2000,
                                                "Digital Marketer", 2000,
                                                "Content Creator", 2000,
                                                "Developer", 2000,
                                            ]}
                                            wrapper='span'
                                            cursor={true}
                                            repeat={Infinity}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                    <img src={pic} alt="binita" className="binita-pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}