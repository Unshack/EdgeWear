import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to EdgeWear, where fashion meets creativity! At EdgeWear, we
            believe that a t-shirt is more than just clothing—it’s an expression
            of your personality and individuality. Our mission is to provide you
            with high-quality, stylish t-shirts that let you stand out from the
            crowd.
          </p>
          <p>
            Founded with a passion for design and innovation, EdgeWear offers a
            wide range of t-shirt collections that blend comfort with
            cutting-edge designs. Whether you’re looking for casual wear, bold
            statements, or something uniquely you, we’ve got you covered.
          </p>
          <b className="text-gray-800">Our mission</b>
          <p>
            To empower self-expression through fashion. We aim to create unique,
            comfortable, and sustainable t-shirts that reflect the individuality
            and diversity of our customers. We are committed to providing
            high-quality apparel while promoting eco-conscious practices, making
            fashion fun, inclusive, and environmentally friendly.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Quality is non-negotiable. Every t-shirt we produce undergoes a
            rigorous quality control process to ensure it meets the highest
            standards. From sourcing premium fabrics to precision in printing
            and stitching, we leave no detail unchecked. Our team of experts
            inspects each product at every stage—from design to
            delivery—ensuring durability, comfort, and customer satisfaction.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            We know how valuable your time is, which is why EdgeWear is designed
            with convenience in mind. Our user-friendly shopping experience
            ensures that you can browse, select, and purchase your favorite
            t-shirts effortlessly. Whether you’re shopping from your phone,
            tablet, or computer, our platform is optimized to make your
            experience smooth and hassle-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            We pride ourselves on delivering exceptional customer service,
            ensuring that shopping is a delightful experience. Our dedicated
            support team is available 24/7 to assist with any inquiries,
            offering personalized solutions and a fast response time to address
            your needs. Your satisfaction is our priority, backed by our
            Customer Satisfaction Guarantee—if you’re not completely happy with
            your purchase, we’ll make it right.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
