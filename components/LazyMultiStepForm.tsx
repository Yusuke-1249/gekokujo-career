"use client";

import dynamic from "next/dynamic";

const MultiStepForm = dynamic(() => import("@/components/MultiStepForm"), {
  ssr: false,
  loading: () => (
    <section id="form-section" className="bg-gray-50 pb-8">
      <div className="max-w-md mx-auto py-16 px-4 text-center text-gray-500">
        フォームを読み込んでいます...
      </div>
    </section>
  ),
});

export default function LazyMultiStepForm() {
  return <MultiStepForm />;
}
