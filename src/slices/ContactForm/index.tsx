"use client";

import { HeaderFour } from "@/app/components/Typography";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Form, Input, notification } from "antd";
import { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import { usePathname } from "next/navigation";
import sendMail from "@/app/server-actions/sendEmail";

type FormTypes = "text" | "multiline" | "email";
const FormItem = ({ label, type }: { label: string; type: FormTypes }) => {
  return (
    <Form.Item
      required
      label={label}
      name={label}
      rules={
        type === "email"
          ? [{ type: "email", required: true }]
          : [{ required: true }]
      }
      className={type === "multiline" ? "" : "border-b-[1px] border-black"}
    >
      {type === "multiline" ? (
        <Input.TextArea
          className="border-b-[1px] border-black bg-inherit"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      ) : (
        <Input variant="borderless" className="bg-inherit" />
      )}
    </Form.Item>
  );
};

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps) => {
  const pathname = usePathname();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const entity = pathname.split("/")[1] as "bangkok-kunsthalle" | "art-forest";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormSubmit = async (values: {
    Company: string;
    Email: string;
    Message: string;
    Name: string;
    Subject: string;
  }) => {
    setSubmitting(true);
    try {
      const payload = {
        to:
          entity === "bangkok-kunsthalle"
            ? "info@bangkok-kunsthalle.org"
            : "info@khaoyaiart.com",
        subject: values.Subject,
        body: `
        Name: ${values.Name}
        Company: ${values.Company}
        Email: ${values.Email}
        Message: ${values.Message}
        `,
      };
      await sendMail(payload);

      notification.success({
        message: "Form submitted successfully",
        description: "Thank you for your message. We will get back to you soon.",
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Failed to submit form",
        description: "There was an error sending your message. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section>
        <p>Thank you for your message. We will get back to you soon.</p>
      </section>
    );
  }

  return (
    <section
      className="mb-8 p-2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col gap-4">
        <HeaderFour>{slice.primary.title}</HeaderFour>

        {/* Form */}
        {/* <form className="flex flex-col gap-4">
          {slice.primary.form_field.map((field) => (
            <Input
              key={field.label}
              label={field.label as string}
              type={field.form_type?.toLowerCase() as FormTypes}
            />
          ))}

          <div className="flex justify-end mt-4">
            <button className="">
              <span>{slice.primary.submit_button_label}</span>
            </button>
          </div>
        </form> */}
        <Form layout="vertical" requiredMark={false} onFinish={onFormSubmit}>
          {slice.primary.form_field.map((field) => (
            <FormItem
              key={field.label}
              label={field.label as string}
              type={field.form_type?.toLowerCase() as FormTypes}
            />
          ))}

          <div className="flex justify-end mt-4">
            <Form.Item>
              <button
                className="hover:shadow-lg border-[1px] border-black py-1 px-4"
                type="submit"
              >
                {submitting
                  ? "Submitting..."
                  : slice.primary.submit_button_label}
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
