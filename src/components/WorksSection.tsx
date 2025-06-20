import ProjectCard from './ProjectCard'

const projects = [
  {
    title: '人材派遣業企業の受注・シフト管理システム',
    technologies: ['React', 'PHP', 'Laravel', 'Heroku'],
    architecture: ['DDD']
  },
  {
    title: '採用メディアサイト「レイワーカーズ」',
    technologies: ['React', 'Next.js', 'PHP', 'Laravel', 'Vercel', 'Heroku', 'Micro CMS'],
    url: 'https://reiworkers.com/'
  },
  {
    title: 'SNSモバイルアプリ開発',
    technologies: ['Dart', 'Flutter', 'PHP', 'Laravel', 'AWS', 'ECS', 'Fargate', 'CodeBuild', 'RDS', 'S3', 'CloudFront', 'TestFlight'],
    imageUrl: '/placeholder-app.png'
  },
  {
    title: 'シニアアテンダント（民間資格）のeラーニングシステム',
    technologies: ['PHP', 'Laravel', 'AWS', 'EC2', 'RDS', 'S3', 'CloudFront', 'GMPペイメントゲートウェイ'],
    url: 'https://iaasa.net/'
  },
  {
    title: 'インフルエンサーのおすすめ商品紹介サイト',
    technologies: ['React', 'Next.js', 'Vercel', 'Micro CMS']
  },
  {
    title: '懐かしのプロフィール帳アプリ',
    technologies: ['React', 'PHP', 'Laravel', 'Heroku'],
    imageUrl: '/placeholder-profile.png'
  }
]

export default function WorksSection() {
  return (
    <section className="mb-32 relative">
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tight">
            Works
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          これまでに開発したプロダクトの実績です
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div key={index} className={`fade-in-up stagger-${(index % 6) + 1}`}>
            <ProjectCard
              title={project.title}
              technologies={project.technologies}
              url={project.url}
              imageUrl={project.imageUrl}
              architecture={project.architecture}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-indigo-200 to-transparent"></div>
    </section>
  )
}