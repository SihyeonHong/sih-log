export default function Tester() {
  return (
    <>
      <p className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {/* 커스텀 유틸리티 클래스 테스트 */}
      <div className="code-block">
        <pre>
          {`// 커스텀 유틸리티 클래스 테스트
const example = {
  font: "font-mono",
  background: "background-secondary",
  description: "코드 블록용 커스텀 스타일"
};

console.log("이 코드는 monospace 폰트와 보조 배경색을 사용합니다.");`}
        </pre>
      </div>

      <p className="p-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p style={{ color: "#A6808C" }}>inline style</p>
    </>
  );
}
