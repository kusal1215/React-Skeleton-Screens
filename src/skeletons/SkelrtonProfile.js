import React from "react";
import './skeletons.css'
import SkeletonElement from "./skeletonElement";
import Shimmer from "./shimmer";

const SkeletonProfile = ({theme}) => {

    const themeClass = theme || 'light';

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonElement type="avatar" />
                </div>
                <div>
                    <SkeletonElement type="title" />
                    <SkeletonElement type="text" />
                    <SkeletonElement type="text" />
                </div>
                <Shimmer/>
            </div>
        </div>
    );
}

export default SkeletonProfile;