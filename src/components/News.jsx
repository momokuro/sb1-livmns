import React from 'react';

function News() {
  return (
    <div className="news">
      <h2>ニュース</h2>
      <ul>
        <li>
          <h3>[ニュースタイトル1]</h3>
          <p>[日付]</p>
          <p>[ニュースの簡単な説明]</p>
        </li>
        <li>
          <h3>[ニュースタイトル2]</h3>
          <p>[日付]</p>
          <p>[ニュースの簡単な説明]</p>
        </li>
        {/* 必要に応じてニュース項目を追加 */}
      </ul>
    </div>
  );
}

export default News;