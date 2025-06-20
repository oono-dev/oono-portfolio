const socialLinks = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/oono_dev',
    icon: '𝕏',
    gradient: 'from-gray-800 to-black',
    description: 'Follow for updates'
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/oono_dev',
    icon: '📝',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Tech articles'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/oono-dev',
    icon: '🐙',
    gradient: 'from-gray-700 to-gray-900',
    description: 'Source code'
  },
  {
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/oono',
    icon: '🎤',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Presentations'
  }
]

export default function SocialLinksSection() {
  return (
    <section className="mb-32 relative">
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tight">
            Links
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          SNS・外部サービスのアカウント
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {socialLinks.map((link, index) => (
          <div key={link.name} className={`fade-in-up stagger-${index + 1}`}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
                
                <div className="relative text-center">
                  <div className="mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className="relative w-16 h-16 mx-auto bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <div className="text-3xl">{link.icon}</div>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {link.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {link.description}
                  </p>
                  
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-indigo-300 transition-all duration-300"></div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-purple-200 to-transparent"></div>
      
      <div className="mt-20 text-center">
        <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100">
          <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">お気軽にお声がけください</span>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}