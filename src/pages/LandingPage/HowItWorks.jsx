export const HowItWorks = () => {

  const steps = [
    {
      title: "Step 1",
      text: "Browse or List Vehicles",
      span: ""
    },
    {
      title: "Step 2",
      text: "Choose Rental Type (Self-drive or Chauffeur) and test again.",
      span: "col-span-2"
    },
    {
      title: "Step 3",
      text: "Select Protection Plan",
      span: "col-span-2"
    },
    {
      title: "Step 4",
      text: "Confirm & Drive",
      span: ""
    }
  ]

  return (
    <section className="rounded-3xl md:rounded-[45px] bg-white w-full flex justify-center mt-12">
      <div className="w-full max-w-3xl py-5 md:py-10 px-3 md:px-8 text-center">

        <h1 className="font-clash font-semibold text-2xl md:text-5xl">
          How <span className="text-[#0674FF] uppercase">EvoDrive</span> Works
        </h1>

        <p className="font-archivo text-gray-500 mt-2">
          Simple. Transparent. Built for the Nigerian market.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

          {/* Steps in Evo Drive */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`bg-[#F0F1F3] p-6 rounded-xl text-left max-sm:col-span-1 ${step.span}`}
            >
              <p className="text-2xl md:text-3xl font-clash font-semibold">
                {step.title}
              </p>
              <p className="font-clash text-[#8A8F93] text-base">
                {step.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}