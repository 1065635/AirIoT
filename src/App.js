import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import airTaoyuan from "./airTaoyuan";
import weatherTaoyuan from "./weatherTaoyuan";

import airDaoyuan from "./airDaoyuan";
import weatherDaoyuan from "./weatherDaoyuan";

import airGuanyin from "./airGuanyin";
import weatherGuanyin from "./weatherGuanyin";

import airPingzhen from "./airPingzhen";
import weatherPingzhen from "./weatherPingzhen";

import airLongTan from "./airLongTan";
import weatherLongTan from "./weatherLongTan";

import airZhongli from "./airZhongli";
import weatherZhongli from "./weatherZhongli";

import airChungyuan from "./airChungyuan";
import airWuling from "./airWuling";
import airTibaMe from "./airTibaMe";
import airDaozhu from "./airDaozhu";

const App=()=>{
    return( 
        <HashRouter in>
            <Switch>
                <Route exact path="/Taoyuan_weather" component={weatherTaoyuan}/>
                <Route exact path="/Taoyuan_air_quaility" component={airTaoyuan}/>
				
				<Route exact path="/Daoyuan_weather" component={weatherDaoyuan}/>
				<Route exact path="/Daoyuan_air_quaility" component={airDaoyuan}/>
				
				<Route exact path="/Guanyin_weather" component={weatherGuanyin}/>
				<Route exact path="/Guanyin_air_quaility" component={airGuanyin}/>
				
				<Route exact path="/Pingzhen_weather" component={weatherPingzhen}/>
				<Route exact path="/Pingzhen_air_quaility" component={airPingzhen}/>
				
				<Route exact path="/Longtan_weather" component={weatherLongTan}/>
				<Route exact path="/Longtan_air_quaility" component={airLongTan}/>
				
				<Route exact path="/Taoyuan_weather" component={weatherTaoyuan}/>
				<Route exact path="/Taoyuan_air_quaility" component={airTaoyuan}/>
				
				
				<Route exact path="/Zhongli_weather" component={weatherZhongli}/>
				<Route exact path="/Zhongli_air_quaility" component={airZhongli}/>
				
				<Route exact path="/Chung_air_quaility" component={airChungyuan}/>
		        <Route exact path="/Wuling_air_quaility" component={airWuling}/>
				<Route exact path="/TibaMe_air_quaility" component={airTibaMe}/>
				<Route exact path="/Daozhu_air_quaility" component={airDaozhu}/>
				
				
				
            </Switch>
        </HashRouter>
    );
}
export default App;

//請參考https://blog.csdn.net/datouniao1/article/details/121664981
//https://blog.csdn.net/Fxhani/article/details/121615820?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.fixedcolumn&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.fixedcolumn
//import React from 'react';
//import {Route,Routes} from "react-router-dom";
//import FirstPage from "./airTaoyuan";
//import SecondPage from "./weatherTaoyuan";

//const App=()=>{
//    return( 
//        <Route>
//            <Routes>
//                <Route exact path="/" component={FirstPage}/>
//                <Route path="/second" component={SecondPage}/>
//            </Routes>
//        </Route>
//    );
//}
//export default App;