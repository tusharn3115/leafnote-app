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

interface PasswordResetEmailProps {
  userName: string,
  resetUrl: string,
}

const SendResetPassword = ({
  userName,
  resetUrl,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password to regain access to your account</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 mb-[8px]">
                Reset Your Password
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px]">
                Hello {userName},
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[16px]">
                We received a request to reset the password for your LeafNote
                account associated with it.
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px]">
                Click the button below to create a new password:
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={resetUrl}
                className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-red-700"
              >
                Reset My Password
              </Button>
            </Section>

            {/* Security Notice */}
            <Section className="mb-[32px] p-[20px] bg-red-50 rounded-[8px] border-solid border-[1px] border-red-200">
              <Text className="text-[14px] text-red-800 mb-[12px] font-semibold m-0">
                Security Information:
              </Text>
              <Text className="text-[14px] text-red-700 mb-[8px] m-0">
                • This password reset link will expire soon for security
                reasons
              </Text>
              <Text className="text-[14px] text-red-700 mb-[8px] m-0">
                • If you didn&apos;t request this reset, please ignore this
                email
              </Text>
              <Text className="text-[14px] text-red-700 m-0">
                • Your current password remains unchanged until you create a new
                one
              </Text>
            </Section>

            {/* Alternative Action */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[8px]">
                If you&apos;re having trouble clicking the button, copy and
                paste this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all font-mono bg-gray-50 p-[12px] rounded-[4px] border-solid border-[1px] border-gray-200 m-0">
                {resetUrl}
              </Text>
            </Section>

            {/* Support Section */}
            <Section className="mb-[32px] p-[16px] bg-blue-50 rounded-[8px] border-solid border-[1px] border-blue-200">
              <Text className="text-[14px] text-blue-800 m-0">
                <strong>Need help?</strong> If you continue to have problems or
                didn&apos;t request this password reset, please contact our
                support team immediately.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t-[1px] border-solid border-gray-200 pt-[24px]">
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

export default SendResetPassword;
