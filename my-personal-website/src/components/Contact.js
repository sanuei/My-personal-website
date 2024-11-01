import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = 'taro.yamada@example.com';
    const subject = encodeURIComponent('お問い合わせ');
    const body = encodeURIComponent(`
      名前: ${name}
      メールアドレス: ${email}
      メッセージ: ${message}
    `);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact">
      <h2>お問い合わせ</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>個人情報</h3>
          <p><strong>氏名：</strong>山田 太郎</p>
          <p><strong>電話番号：</strong>090-1234-5678</p>
          <p><strong>メールアドレス：</strong>taro.yamada@example.com</p>
          <p><strong>住所：</strong>〒100-0001 東京都千代田区千代田1-1-1</p>
        </div>
        <div className="contact-form">
          <h3>お問い合わせフォーム</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">お名前：</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">メールアドレス：</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">メッセージ：</label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">送信</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;