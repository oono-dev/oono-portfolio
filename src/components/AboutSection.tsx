export default function AboutSection() {
  return (
    <section className="mb-32 relative">
      <div className="text-center">
        <div className="inline-block mb-8 floating-animation">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold gradient-text">
              大野
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-4 gradient-text fade-in-up tracking-tight">
          大野克樹
        </h1>
        
        <div className="inline-block mb-12 fade-in-up stagger-1">
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-2 tracking-wider">
            Web Engineer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 fade-in-up stagger-2">
          <div className="glass-effect rounded-3xl p-8 md:p-12 backdrop-blur-sm bg-white/70 border border-white/20 shadow-2xl">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
              新卒から2年間SIer勤務の後、よりエンジニアとしてのスキルを磨くべく
              <span className="text-indigo-600 font-semibold">広告代理店ベンチャー</span>にて
              webエンジニアとして勤務。
            </p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                <span className="text-purple-600 font-semibold">0→1フェーズ</span>での経験が多く、
                <span className="text-cyan-600 font-semibold">エンタープライズ（toB）向け</span>の
                システム開発を得意とする。
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 fade-in-up stagger-3">
          <div className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Available for new opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}