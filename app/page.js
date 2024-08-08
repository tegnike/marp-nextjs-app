import MarpSlides from '../components/MarpSlides';

async function getSlides() {
  // ファイルシステムから直接読み込む
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'public', 'slides.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return { content: fileContents };
}

export default async function Home() {
  const { content: markdown } = await getSlides();

  return (
    <div>
      <h1>Marp Slides in Next.js</h1>
      <MarpSlides markdown={markdown} />
    </div>
  );
}
