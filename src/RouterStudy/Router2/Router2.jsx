import { Route, Routes } from "react-router-dom"



/**
 * 
 * 
 */

function Page1() {
    return(
        <>
        <div>
            <h1>Page1</h1>
            {/**부모 Routedml path가 /* 로 끝났기 때문에 여기서부터는 그 뒷부분의 경로를 기준으로 매칭 */}
            <Routes>
                <Route path="/page1" element={<h1>페이지 1 입니다.</h1>} />
                <Route path="/page2" element={<Page2 /> } />
            </Routes>
        </div>
    </>
    )
}



function Router2() {
  return (
 
    <div>
        <header>
            <Link to={"/page/page1"}>page1</Link>
            <Link to={"/page/page2"}>page2</Link>
            <Link to={"/name/name1"}>name1</Link>
            <Link to={"/name/name2"}>name2</Link>
            
        </header>
        <h1>Router2</h1>
        <Routes>
            {/**경로 뒤에 /* 와일드  카드 사용 */}
            {/**이 경로롤 시작하는 모든 하위 경로를 의미 */}
            {/** 즉 /page/page1 또는 /page/page2 등에 해당하는 컴포넌트를 <Page1>에서 보여준다 */}
            <Route path="/page/*" element={<Page1 />} />
            <Route path="/name/*" 
            element=
            {<Routes>
                <Route path="/name1" element={<h1>김소현</h1>}></Route>
                <Route path="/name2" element={<h1>이소현</h1>}></Route>
            </Routes>
            }
            />
        </Routes>
    </div>
  )
}

export default Router2