export default function Home() {
  return (
    <main className="font-roboto max-w-[700px] mx-auto p-4 md:p-8">
      {/* Section 1 */}
      <div className="flex flex-col justify-center min-h-screen text-center">
        <h1 className="typed-out justify-center mb-8 md:mb-12 text-lg">We are Demerzel</h1>
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          <p className="text-lg">
            We are a team of dedicated builders who exist at the intersection of two
            transformative technologies: Blockchain and Robotics.
          </p>
          <p>
            Fundamentally we believe that Robotics will be a transformative force, disrupting
            societies and economies. We envision a future where robotic technology is
            abundant, where humans and robots collaborate safely and securely.
          </p>
          <p>
            Underpinning this vision is a shared belief that the technologies securing the
            future of ubiquitous robotics will be collaborative, leveraging blockchain-based
            security and economic mechanisms. A future where sovereignty over identity and
            capital will be paramount to our safe co-existence with machine.
          </p>
        </div>
      </div>
      
      {/* Section 2 */}
      <div className="flex flex-col justify-center min-h-screen text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">We research profound ideas</h2>
        <ul className="text-left list-none space-y-6 md:space-y-8 mb-12 md:mb-16">
          <li>
            <strong className="text-lg">Verifiable Computing</strong>
            <p className="mt-1">Ensuring trust and safety in robotic systems through rigorous software and hardware verification.</p>
          </li>
          <li>
            <strong className="text-lg">Robotic Economies</strong>
            <p className="mt-1">Capital will be tokenized. The demands for Robotic capital and information will flow on blockchain infrastructure in a permissionless economy.</p>
          </li>
          <li>
            <strong className="text-lg">Biometric Identity and Humanhood</strong>
            <p className="mt-1">Developing unique identity tools to distinguish humans from robots in a crowded digital world.</p>
          </li>
          <li>
            <strong className="text-lg">Secure Robot to Robot Communications</strong>
            <p className="mt-1">Using blockchain technologies and cryptography to ensure safe and secure communication between robots and humans.</p>
          </li>
          <li>
            <strong className="text-lg">Self-Reliant Agents</strong>
            <p className="mt-1">Creating systems that operate independently of centralized data sources.</p>
          </li>
        </ul>
        <p className="mb-8 md:mb-12">
          Demerzel is pioneering a secure future through robotics, AI, and blockchain.
          We&apos;re addressing the most pressing questions of the future.
        </p>
      </div>
      
      {/* Section 3 */}
      <div className="flex flex-col justify-center min-h-screen text-center">
        <p className="text-xl md:text-2xl font-bold mb-8 md:mb-12">Are you ready to shape the future of Robotics?</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Where to find us</h2>
        <p className="mb-4 md:mb-6">Meet us at an event</p>
        <ul className="text-left list-disc list-inside space-y-4 mb-12 md:mb-16">
          <li>ETHGlobal Hackathons - We will be running robotics hackathons with a shared $15k prize for builders</li>
          <li>Token2049 & DEVCON - Meet the Demerzel team</li>
        </ul>
        <div className="space-y-8 md:space-y-12">
        </div>
      </div>
    </main>
  );
}
