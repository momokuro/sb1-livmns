import React from 'react';

function Products() {
  return (
    <div className="products">
      <h2>製品・サービス</h2>
      <ul>
        <li>
          <h3>[製品/サービス1]</h3>
          <p>[製品/サービスの簡単な説明]</p>
        </li>
        <li>
          <h3>[製品/サービス2]</h3>
          <p>[製品/サービスの簡単な説明]</p>
        </li>
        {/* 必要に応じて製品/サービスを追加 */}
      </ul>
    </div>
  );
}

export default Products;