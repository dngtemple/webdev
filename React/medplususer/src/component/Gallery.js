import image from "../images/gall2.jpg"
import image1 from "../images/gall3.jpg"
import image2 from "../images/gall4.jpg"
import image3 from "../images/gall5.png"
import image4 from "../images/gall6.jpg"
import image5 from "../images/gall1.webp"

export default function Gallery() {
  return (
    <section className='gallery_section'>
        <div className='gallery'>
            <img src={image5}/>
            <img src={image}/>
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>

        </div>

    </section>
  )
}
