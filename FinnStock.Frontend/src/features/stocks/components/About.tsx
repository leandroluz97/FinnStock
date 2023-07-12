export const About = () => {
    return (
        <React.Fragment>
            <h3 className="text-primary-950 font-black uppercase text-sm">BTC to USD Converter</h3>
            <div className="bg-primary-200 rounded-lg my-4 flex justify-between relative">
                <div className="p-5 flex-1">
                    <h4 className="font-extrabold text-primary-900 text-lg">1 unit - Apple Inc</h4>
                </div>
                <div className="bg-white rounded-full h-10 w-10 flex justify-center content-center flex-wrap absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#3E5F8A"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </div>
                <div className="flex-1 p-5 border-l-2 border-white text-right">
                    <h5 className="font-extrabold text-primary-900 text-lg">$399,00</h5>
                </div>
            </div>
            <h3 className="text-primary-950 font-black uppercase text-sm">What is Apple Inc</h3>
            <p className="text-primary-800 text-justify">
                Apple Inc. is an American multinational technology company headquartered in
                Cupertino, California, that designs, develops, and sells consumer electronics,
                computer software, and online services. It is considered one of the Big Four
                technology companies, alongside Amazon, Google, and Microsoft. The company's
                hardware products include the iPhone smartphone, the iPad tablet computer, the Mac
                personal computer, the iPod portable media player, the Apple Watch smartwatch, the
                Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart
                speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS
                operating systems, the iTunes media player, the Safari web browser, the Shazam
                acoustic fingerprint utility, and the iLife and iWork creativity and productivity
                suites, as well as professional applications like Final Cut Pro, Logic Pro, and
                Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App
                Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple
                Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.
            </p>
        </React.Fragment>
    );
};
