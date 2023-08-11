import CardFeatures from "@/components/CardFeatures";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SectionFeature from "@/components/SectionFeature";
import SectionPlataform from "@/components/SectionPlataform";


export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <CardFeatures />
            <SectionFeature 
                direction="row"
                title="Start work with your teammates effectively and seamlesly"
                content="Cranberry is built for every member of your project team to plan, manage track, and release great results."
                contentButton="Explore features"
                displayButton="block"
                image="feature-image-2.png"            
            />
            <SectionPlataform />
            <Faq />
        </>
    )
}