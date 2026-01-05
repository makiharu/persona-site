import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Profile - makiharu',
  description: 'プロフィール',
};

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-12 tracking-tight">Profile</h1>
      
      <div className="prose prose-gray max-w-none">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">makiharu</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ソフトウェアエンジニア。
          </p>
          <p className="text-gray-700 leading-relaxed">
            技術、マジック、ランニング、習慣について考え、実践しています。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">興味のあること</h2>
          <ul className="space-y-2 text-gray-700">
            <li>フロントエンド開発</li>
            <li>プロダクト開発</li>
            <li>マジック</li>
            <li>ランニング</li>
            <li>習慣化</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">このサイトについて</h2>
          <p className="text-gray-700 leading-relaxed">
            日々考えたこと、試したこと、続けていることを記録するための個人サイトです。<br />
            技術的な詳細は Qiita や Zenn で、それ以外の思考や実践はここで整理しています。
          </p>
        </section>
      </div>
    </div>
  );
}