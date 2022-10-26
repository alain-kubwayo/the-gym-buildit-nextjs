// Component imports
import Label from "../../headings/Label";
import Subtitle from "../../headings/Subtitle";
import ContactDetail from "../../misc/ContactDetail";
import Form from "../../misc/Form";

const Contact = () => {
  return (
    <section className="bg-secondary-100 py-32">
      <div className="w-[1280px] max-w-[80%] mx-auto">
        <div className="grid grid-cols-1 space-y-20 md:space-y-0 md:grid-cols-2">
          <div>
            <div className="flex flex-col space-y-20 md:space-y-0 justify-between h-full">
              <div className="space-y-3">
                <Label text="Contact" />
                <Subtitle
                  style="text-secondary-400 text-4xl font-semibold"
                  description="Get In Touch"
                />
              </div>

              <div className="space-y-3">
                <ContactDetail
                  src="/assets/home/form-icon-1.svg"
                  width={70}
                  height={70}
                  tag="Tel"
                >
                  708-790-0000
                </ContactDetail>
                <ContactDetail
                  src="/assets/home/form-icon-2.svg"
                  width={70}
                  height={70}
                  tag="Email"
                >
                  sales@buildit.site
                </ContactDetail>
                <ContactDetail
                  src="/assets/home/form-icon-2.svg"
                  width={70}
                  height={70}
                  tag="Office"
                >
                  60 Manor Station St. <br /> Fairport, NY 14450
                </ContactDetail>
              </div>
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
