import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // LIFFの初期化やユーザー情報の取得ロジック
  }, []);

  const submitVote = () => {
    // ここで選択された投票をバックエンドに送信
    console.log(`Submitted vote for: ${selectedOption}`);
    // Firebaseなどのデータベースに投票結果を保存する処理を実装
  };

  return (
    <div className="App">
      <h1>Vote for Your Favorite Option</h1>
      <div>
        <label>
          <input
            type="radio"
            value="Option1"
            checked={selectedOption === "Option1"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Option2"
            checked={selectedOption === "Option2"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 2
        </label>
      </div>
      {/* 他の選択肢も同様に追加 */}
      <button onClick={submitVote}>Submit Vote</button>
    </div>
  );
}

export default App;
