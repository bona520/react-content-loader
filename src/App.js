import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={4}
    width={1200}
    height={1100}
    viewBox="0 0 1200 1100"
    backgroundColor="#f5f5f5"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="46" cy="46" r="31" /> 
    <rect x="146" y="40" rx="3" ry="3" width="76" height="16" /> 
    <rect x="244" y="40" rx="3" ry="3" width="82" height="16" /> 
    <rect x="346" y="40" rx="3" ry="3" width="40" height="16" /> 
    <circle cx="514" cy="44" r="10" /> 
    <circle cx="543" cy="44" r="10" /> 
    <circle cx="571" cy="44" r="10" /> 
    <rect x="13" y="110" rx="10" ry="10" width="572" height="159" /> 
    <rect x="12" y="310" rx="10" ry="10" width="269" height="124" /> 
    <rect x="311" y="310" rx="10" ry="10" width="271" height="124" /> 
    <rect x="15" y="470" rx="3" ry="3" width="82" height="16" /> 
    <rect x="18" y="506" rx="10" ry="10" width="121" height="145" /> 
    <rect x="167" y="506" rx="10" ry="10" width="121" height="145" /> 
    <rect x="310" y="506" rx="10" ry="10" width="121" height="145" /> 
    <rect x="458" y="506" rx="10" ry="10" width="121" height="145" /> 
    <circle cx="539" cy="477" r="10" /> 
    <circle cx="567" cy="477" r="10" /> 
    <rect x="15" y="680" rx="3" ry="3" width="82" height="16" /> 
    <rect x="509" y="680" rx="3" ry="3" width="70" height="16" /> 
    <rect x="430" y="680" rx="3" ry="3" width="70" height="16" /> 
    <rect x="345" y="680" rx="3" ry="3" width="70" height="16" /> 
    <rect x="263" y="680" rx="3" ry="3" width="70" height="16" /> 
    <rect x="21" y="717" rx="10" ry="10" width="121" height="145" /> 
    <rect x="170" y="717" rx="10" ry="10" width="121" height="145" /> 
    <rect x="313" y="717" rx="10" ry="10" width="121" height="145" /> 
    <rect x="461" y="717" rx="10" ry="10" width="121" height="145" /> 
    <rect x="21" y="880" rx="10" ry="10" width="121" height="145" /> 
    <rect x="170" y="880" rx="10" ry="10" width="121" height="145" /> 
    <rect x="313" y="880" rx="10" ry="10" width="121" height="145" /> 
    <rect x="461" y="880" rx="10" ry="10" width="121" height="145" />
  </ContentLoader>
)

export default MyLoader

