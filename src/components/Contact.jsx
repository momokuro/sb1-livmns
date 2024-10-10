import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>お問い合わせ</h2>
      <form>
        <div>
          <label htmlFor="name">お名前：</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">メッセージ：</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default Contact;