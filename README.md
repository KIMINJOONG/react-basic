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




이벤트 설정
html
onclick="alert("hello");"
react
onClick={this.handleIncrease}

주의점
이벤트 이름 설정할때 camelCase로 설정 onclick = onClick, onmousedown은 onMouseDown
onChange == onChange 이런식으로
이벤트에 전달해주는 값은 함수!
onClick={this.handleIncrea()}이런식으로 하게되면 렌더링을 할때마다 해당 함수 호출
이렇게 해버리면 렌더링->함수호출->setState->렌더링->함수호출->무한반복으로 되버림
반드시 주의!! 렌더링 함수에서 이벤트를 설정할때 메소드룰 호출하면 절다 안됌!!

컴포넌트 초기 생성
컴포넌트가 브라우저에 나타나기 전,후에 호출되는 api들이 있다.
constructor : 생성자 함수 컴포넌트가 새로 만들어질때마다 이 함수가 호출

componentWillMount : 컴포넌트가 화면에 나가기 직전에 호출되는 api 별로 신경쓰지 않아도됨
16.3버전 이후부터는 UNSAFE_componentWillMount()로 사용
이 api가 하는 일은 constructor와 componentDidMount에서 충분히 처리가능

componentDidMount : 컴포넌트가 화면에 나타나게 됐을때 호출 여기서 주로 d3, masonry처럼 DOM을 사용해야하는
외부 라이브러리 연동을 하거나 해당 컴포넌트에서 필요로 하는 데이터를 요청하기위해 axios, fetch등을 통하여
ajax를 요청 or DOM의 속성을 읽거나 직접변경하는 작업

#컴포넌트업데이트
컴포넌트가 업데이트는 props의 변화, 그리고 state의 변화에 따라 결정
업데이트가 되기 전과 그리고 된 후

componentWillReceiveProps : 이 API는 컴포넌트가 새로운 props를 받게됐을때 호출
이안에서는 주로 state가 props에 따라 변해야하는 로직을 작성
새로 받게될 props는 nextProps로 조회할수있으며 이때 this.props를 조회하면 업데이트 되기전의 api임
이또한 16.3버전부터 deprecate됨 16.3부터는
UNSAFE_componentWillReceiveProps()라는 이름으로 사용
상황에따라 새로운 api getDerivedStateFromProps로 대체가능

[NEW]static getDerivedStateFromProps()
이 함수는 16.3버전이후에 만들어진 라이프사이클 api props로 받아온값을 state로 동기화 하는 작업을 해줘야하는 경우

shouldComponentUpdate
이 api는 컴포넌트를 죄적화하는 작업에서 매우 유용
렌더링된다는것은 render()함수가 호출된다는 의미
변화가 없으면 DOM조작 x 그저 VirtualDOM에만 렌더링
쓸데없이 낭비되는 cpu처리량을 줄여주기 위해 VirtualDOM에 리렌더링하는것도 불필요할경우엔 방지하기 위해 사용
기본적으로 true를 반환 작성조건에 따라 false를 반환하면 해당조건에는 render함수를 호출안함

componentWillUpdate
이 api는 shouldComponentUpdate에서 true를 반환했을때만 호출
만약에 false를 반환하면 호출되지 않음
여기선 주로 애니메이션 효과를 초기화 or 이벤트 리스너를 없애는 작업을 함
이 함수가 호출된후 render()가 호출
이 api는 16.3버전 이후 deprecate됨 기존의 기능은 getSnapshotBeforeUpdate로 대체

[NEW] getSnapshotBeforeUpdate()
이 api가 발생하는 시점
1. render()
2. getSnapshotBeforeUpdate()
3. 실제 DOM에 변화발생
4.componentDidUpdate

이 api를 통해 DOM변화가 일어나기 직전의 DOM상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번째
파라미터로 받아올수있게됨

componentDidUpdate
이 api는 컴포넌트에서 render()를 호출하고 난 다음 발생
이시점에선 this.props와 this.state가 바뀌어있음
그리고 파라미터를 통해 이전의 값인 prevProps와 prevState를 조회할수있음
그리고, getSnapshotBeforeUpdate에서 반환한 snapshot값은 세번째 값으로 받아옴

컴포넌트 제거
컴포넌트가 더 이상 필요하지 않게 되면 단하나의 api 가 호출
componentWillUnmount
여기서는 주로 등록했었던 이벤트를 제거하고, 만약에 setTimeout을 걸은것이 있다면 clear Timeout을 통하여 제거
추가적으로 외부 라이브러리를 사용한게 있고 해당 라이브러리에 dispose기능이 있다면 여기서 호출


#컴포넌트에 에러발생
render함수에서 에러가 발생한다면 리액트 앱이 크래쉬 되어버림
그러한 상황에 유용하게 사용할수있는 api

componentDidCatch
에러가 발생하면 componentDidCatch가 실행되게 하고 state.error를 true로 설정하게 하고, render함수쪽에서 이에따라 에러를 띄워주면 됨
이 API를 사용할때 주의점
컴포넌트 자신의 render함수에서 에러가 발생해버리는것은 잡아낼수는 없지만 자식컴포넌트내부에서 발생하는 에러는 잡을수 있음

보통 렌더링부분에서 오류가 발생하는 이유
1. 존재하지않는 함수를 호출하려고할때 ex) props로 받았을줄알았던 함수가 전달되지 않았을때
2. 배열이나 객체가 올줄알았는데, 해당객체나 배열이 존재하지 않을때

이러한것들은 render함수에서 다음과 같이 막을수 있다.
render() {
    if(!this.props.object || this.props.array || this.props.array.length ===0) return null;
// object 나 array를 사용하는 코드
}

혹은 이전에 배운 defaultProps를 통해서 설정
static defaultProps = {
    onIncrement : () => console.lwarn('onIncrement is not defined')
, object: {}
, array: []
  }






