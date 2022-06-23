import React from 'react';

function CustomText({ className, text }) {
    return <div className={className}>{text}</div>;
}

export default CustomText;

// khub e important ekta bepar hocche, ekhane props er moddhe classname ashlo kottheke ? bojhar bishoy hocche, amra home e call korechi StyledCustomText jekhane amra props hishebe color pathaichi. kintu somossha hocche Custom text component orthat ei component e oi props ba style ta pouchabe na, karon amra ei CustomText ke StyledCustomText namok HOC diye wrap kore diyechi. tai ekhan theke oi props hishbe color ashuk ba jai ashuk, segula pathale se className naamer ekta props er vitore dhukiye dey. ar sekaronei ekhn theke props gula oi className er maddhome evabe use korte hocche. styledcomponent e HOC use korle eita must follow korte hobe.
