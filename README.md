#리액트 기초
두개이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸줘야함!
 
리액트 16.2버전부터 React.Fragment라는 기능으로 해결가능

JSX안에서 자바스크립트 값을 사용하는법
const name = "injoong";
hello {name}

var : es6에선 더이상 사용안함
const : 한번 선언 후 고정적인 값
let : 유동적인 값

조건부 렌더링
const name = 'injoong';

return (
    <div>
         {
	name === 'injoong' && <div>인중이다!</div>
          }
    </div>
)

조건 여러개일경우
보통 JSX바깥에서 하는게 일반적이지만 굳이 JSX안에서 하고싶다면 IIFE라는 함수를 선언하고 바로실행하는방식으로도 구현 가능 ex)
const value = 1;
return (
    <div>
         {
          (function() {
            if(value === 1) return <div>1이다!</div>
            if(value === 2) return <div>2다!</div>
            if(value === 3) return <div>3이다!</div>
          })()
        }
    </div>
)

화살표 함수란 this, argument, super라는 개념이 없는 함수

JSX에서의 스타일
html은 그냥 텍스트형태로 작성했지만 리액트에서는 객체 형태로 작성해줘야함

ex) const style = {
      backgroundColor: 'black'
      , padding: '16px'
      , color: 'white'
      , fontSize: '12px'
    };
	<div style={stye}>

그리고 리액트는 class대신에 className을 사용


리액트 컴포넌트에서 다루는 데이터는 두개
props 와 state
props는 요약하면 부모 컴포넌트가 자식컴포넌트에게 주는값. 자식 컴포넌트에서는 props를 받아오기만하고, 직접 수정불가
반면 state는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 가능

컴포넌트 사용방법
import를 통하여 컴포넌트를 불러오고 렌더링
일반 태그를 작성하듯이 해주고 props값은 name="리액트" 이런식으로 태그의 속성을 설정해준는것처럼 작성
<MyName name="리액트" /> 

실수로 props를 빠뜨려먹을때가 있음 혹은 특정 상황에 props를 일부러 비워야할 경우
그러한 경우 props으 기본값 설정가능
defaultProps


함수형 컴포넌트
단순히 props만 받아와서 보여주기만 하는 컴포넌트의 경우엔 더 간편한 문법으로 작성가능
바로 함수형태
const MyName = ({ name }) => {
  return (
    <div>
        안녕하세요! 제이름은 {name} 입니다.
    </div>
  );
};

import에서 component를 안가지고 와도됌

함수형 컴포넌트와 클래스형 컴포넌트의 주요 차이점은 state와 lifeCycle이 빠져있다는점!
그래서 컴포넌트 초기 마운트가 아주 미세하게 빠르고 메모리 자원 덜 사용
컴포넌트를 무수히 많이 렌더링 하게 되는게아니라면 성능적으로 큰차이는 없음

state
동적인 데이터를 다룰때 사용

setState란?
this.setState에 대해알아보자
state에 있는 값을 바꾸기 위해서는, this.setState를 무조건!! 거쳐야함.
리액트에서는 이 함수가 호출되면 컴포넌트가 리렌더링 되도록 설계되어있음
객체로 전달되는 값만 업데이트를 해줌

ex) state = {
    number: 0,
    foo: 'bar'
  }

this.setState({ number: 1 });을 하게되면 foo는 그대로 남고 number값만 업데이트
setState는 객체의 깊숙한곳까지 확인 불가
ex) state = {
    number: 0,
    foo: {
      bar: 0,
      foobar: 1
    }
  }

this.setState({ foo: { foobar: 2} }); 
이렇게 해도 foobar값이 업데이트 되지 않음
{
  number: 0,
  foo: {
    foobar: 2
  }
}
이렇게 해버리면 기존의 foo객체가 바뀌어버림.
그대신 위와같은 상황은

this.setState({
  number: 0,
  foo: {
    ...this.state.foo,
    foobar: 2
  }
});

...은 자바스크립트의 전개연산자
기존의 객체안에 있는 내용을 해당위치에다가 풀어준다는 의미
그다음 우리가 설정하고싶은 값을 또 넣어주면 해당값을 덮어쓰게 됨

this.setState({
  number: this.state.number + 1
});
이것을
this.setState(
  (state) => ({
    number: state.number
  })
);

this.setState(
            ({ number }) => ({
                number: number + 1
            })
        );

이런식으로 작성가능

비구조화할당이라는 문법
(state)가 ({number})로 변경됨

const { number } = this.state;
this.setState({
 number: number + 1
})
로도 사용 가능

