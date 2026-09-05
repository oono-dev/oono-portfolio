"use client";

import { useEffect, useState } from "react";
import TechIcon from "./TechIcon";

interface Career {
  period: string;
  company: string;
  industry: string;
  role: string;
  episode: string;
  gradient: string;
  current: boolean;
  detail: {
    summary: string;
    responsibilities: string[];
    technologies: string[];
    learnings: string;
  };
}

const careers: Career[] = [
  {
    period: "2021年4月 〜 2023年3月",
    company: "株式会社中央コンピュータシステム",
    industry: "金融系SIer",
    role: "開発メンバー",
    episode:
      "保険系業務システムの新規開発に従事。大規模プロジェクトの中で、要件定義から保守までの開発の流れを一通り経験する。",
    gradient: "from-cyan-500 to-blue-500",
    current: false,
    detail: {
      summary:
        "新卒で入社し、金融系SIerとして保険系業務システムの新規開発プロジェクトに参画。ウォーターフォール型の大規模開発の中で、設計書に基づく実装・テストから、リリース後の保守対応までを担当した。",
      responsibilities: [
        "保険系業務システムの新規開発における詳細設計・実装・単体テスト",
        "結合テスト・総合テストのテスト仕様書作成と実施",
        "リリース後の保守運用、障害調査と改修対応",
        "上流工程の設計書レビューへの参加",
      ],
      technologies: [],
      learnings:
        "品質を担保するための工程管理やドキュメントの重要性を学ぶ一方で、より自分の手でサービスを作りたいという思いが強まり、webエンジニアへの転向を決めた。",
    },
  },
  {
    period: "2023年4月 〜 2025年7月",
    company: "株式会社WAVE",
    industry: "広告代理店ベンチャー",
    role: "エンジニアリング責任者",
    episode:
      "「ひとりエンジニア」として事業サイドと直接会話しながら、採用メディア・シフト管理・モバイルアプリなど6つのプロダクトを0→1で立ち上げる。",
    gradient: "from-purple-500 to-pink-500",
    current: false,
    detail: {
      summary:
        "社内唯一のエンジニアとして、事業サイドと直接やり取りしながら複数の新規事業のサービス開発を担当。要件定義からインフラ構築・リリース・運用まで、プロダクト開発のすべての工程を一人で担った。",
      responsibilities: [
        "採用メディアサイト「レイワーカーズ」の新規開発。企業情報の掲載をマネタイズポイントとして、営業と連携しながら要件を策定",
        "人材派遣業向けの受注・シフト管理システムをDDDで設計・開発し、シフト管理業務をDX化",
        "SNSモバイルアプリをFlutterで開発し、AWS(ECS/Fargate)上にAPI基盤を構築",
        "民間資格「シニアアテンダント」のeラーニングシステムを決済連携込みで開発",
        "インフルエンサーの商品紹介サイト、プロフィール帳交換アプリなどの小規模サービスの立ち上げ",
        "事業サイドとの折衝を通じた業務課題の抽出と、業務フローそのものの見直し提案",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "React",
        "Next.js",
        "Flutter",
        "Dart",
        "AWS",
        "Vercel",
        "Heroku",
        "Micro CMS",
        "DDD",
      ],
      learnings:
        "「作る」だけでなく、事業として成立させるために何を作るべきかを考える視点が身についた。0→1フェーズで技術選定から運用までを一貫して担った経験が、現在の土台になっている。",
    },
  },
  {
    period: "2025年8月 〜 現在",
    company: "アトミックソフトウェア株式会社",
    industry: "業務SaaSスタートアップ",
    role: "フルスタックエンジニア",
    episode:
      "警備業向けSaaS「警備フォース」を5人チームで開発。プレイングスクラムマスターとして、自分も手を動かしながらチームの開発を前に進める役割を担う。",
    gradient: "from-indigo-500 to-purple-500",
    current: true,
    detail: {
      summary:
        "業務SaaSを複数展開するスタートアップで、警備業向けの業務管理SaaS「警備フォース」の開発を担当。5人の開発チームでプレイングスクラムマスターを務め、スプリント運営と自身の設計・実装を両立している。",
      responsibilities: [
        "警備フォースの機能開発。フロントエンドからバックエンド、インフラまでを横断して担当",
        "スクラムマスターとしてスプリント計画・レトロスペクティブなどのイベント運営とチームのファシリテーション",
        "DDDに基づくドメインモデルの設計と実装",
        "AWS上のインフラをTerraformでコード管理し、環境構築・運用を担当",
      ],
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Hono",
        "AWS",
        "Terraform",
        "DDD",
      ],
      learnings:
        "ひとりで作る開発から、チームで作る開発へ。個人の生産性だけでなく、チーム全体の開発速度と品質をどう上げるかに向き合っている。",
    },
  },
];

function CareerDialog({
  career,
  onClose,
}: {
  career: Career;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="career-dialog-title"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`h-2 w-full bg-gradient-to-r ${career.gradient} rounded-t-3xl`}
        ></div>

        <button
          type="button"
          onClick={onClose}
          aria-label="閉じる"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors duration-200"
        >
          ✕
        </button>

        <div className="p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
            <span className="text-sm font-semibold text-indigo-600 tracking-wide">
              {career.period}
            </span>
            <span className="text-xs font-medium text-gray-500 px-2 py-0.5 rounded-full bg-gray-100">
              {career.industry}
            </span>
          </div>
          <h3
            id="career-dialog-title"
            className="text-2xl font-bold text-gray-800 mb-1 leading-tight pr-10"
          >
            {career.company}
          </h3>
          <p
            className={`inline-block text-sm font-semibold bg-gradient-to-r ${career.gradient} bg-clip-text text-transparent mb-6`}
          >
            {career.role}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {career.detail.summary}
          </p>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <h4 className="text-sm font-semibold text-gray-700 tracking-wide">
                担当業務
              </h4>
            </div>
            <ul className="space-y-2">
              {career.detail.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-600 leading-relaxed text-sm md:text-base"
                >
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-indigo-300"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {career.detail.technologies.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <h4 className="text-sm font-semibold text-gray-700 tracking-wide">
                  使用技術
                </h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {career.detail.technologies.map((tech) => (
                  <TechIcon key={tech} name={tech} />
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              <h4 className="text-sm font-semibold text-gray-700 tracking-wide">
                この経験から
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {career.detail.learnings}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareerSection() {
  const [selected, setSelected] = useState<Career | null>(null);

  return (
    <section className="mb-32 relative">
      <div className="text-center mb-20">
        <div className="inline-block mb-6">
          <h2 className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tight">
            Career
          </h2>
          <div className="h-1 w-28 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          これまでの経歴。カードをクリックすると詳細が見られます
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-200 via-purple-300 to-indigo-300 md:-translate-x-1/2"></div>

        <ol className="space-y-12">
          {careers.map((career, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li
                key={career.company}
                className={`relative fade-in-up stagger-${index + 1} md:flex ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } md:items-start`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${career.gradient} ring-4 ring-white shadow-md ${
                      career.current ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(career)}
                    className="group relative w-full text-left bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-indigo-600 tracking-wide">
                          {career.period}
                        </span>
                        <span className="text-xs font-medium text-gray-500 px-2 py-0.5 rounded-full bg-gray-100">
                          {career.industry}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 leading-tight group-hover:text-indigo-600 transition-colors duration-300">
                        {career.company}
                      </h3>
                      <p
                        className={`inline-block text-sm font-semibold bg-gradient-to-r ${career.gradient} bg-clip-text text-transparent mb-4`}
                      >
                        {career.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {career.episode}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <span>詳細を見る</span>
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {selected && (
        <CareerDialog career={selected} onClose={() => setSelected(null)} />
      )}

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-indigo-200 to-transparent"></div>
    </section>
  );
}
