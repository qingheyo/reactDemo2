import React from 'react';
import imgURL from '../../images/1.png';
/**
 * 创建Header纯函数
 */
export default function Header() {
    return (
        <div className="containHeader">
            <img
                alt=""
                src={imgURL}
            />
            <span className="headerSpan1">每天进步一点点，离目标更近一点点</span>
            <span className="headerSpan2">退出</span>
            <span className="headerSpan3">戴洪波</span>
        </div>
    );
}
