import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface UserVerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: UserVerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Verify your account to complete your registration</Preview>
        <Body className="bg-black font-sans py-[40px]">
          <Container className="bg-[#151516] rounded-[8px] max-w-[600px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-white mb-[8px]">
                Verify Your Account
              </Heading>
              <Text className="text-[16px] text-gray-400 m-0">
                Complete your registration to get started
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-300 mb-[16px]">
                Hello,
              </Text>
              <Text className="text-[16px] text-gray-300 mb-[24px]">
                Thank you for signing up with LeafNote! To complete
                your registration and secure your account, please verify your
                email address by clicking the button below.
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
              >
                Verify My Account
              </Button>
            </Section>

            {/* Footer */}
            <Section className="border-t-[1px] border-solid border-gray-700 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center mb-[8px]">
                This email was sent to {userName}
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mt-[8px] m-0">
                © 2025 LeafNote. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
