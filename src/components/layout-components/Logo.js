import React from 'react'
import { SIDE_NAV_WIDTH, SIDE_NAV_COLLAPSED_WIDTH, NAV_TYPE_TOP } from 'constants/ThemeConstant';
import { APP_NAME } from 'configs/AppConfig';
import { useSelector } from 'react-redux';
import utils from 'utils';
import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const Logo = ({ mobileLogo, logoType }) => {

	const isMobile = !utils.getBreakPoint(useBreakpoint()).includes('lg');

	const navCollapsed = useSelector(state => state.theme.navCollapsed);
	const navType = useSelector(state => state.theme.navType);

	const getLogoWidthGutter = () => {
		const isNavTop = navType === NAV_TYPE_TOP ? true : false
		if(isMobile && !mobileLogo) {
			return 0
		}
		if(isNavTop) {
			return 'auto'
		}
		if(navCollapsed) {
			return `${SIDE_NAV_COLLAPSED_WIDTH}px`
		} else {
			return `${SIDE_NAV_WIDTH}px`
		}
	}
	
	const getLogo = () => {
		if(logoType === 'light') {
			if(navCollapsed) {
			return '/img/logo-sm-white.png'
			}
			return '/img/logo-white.png'
		}
	
		if (navCollapsed) {
			return '/img/logo-sm.png'
		}
		return '/img/logo.png'
	}
	
	const getLogoDisplay = () => {
		if(isMobile && !mobileLogo) {
			return 'd-none'
		} else {
			return 'logo'
		}
	}

	return (
		<div
			className={getLogoDisplay()} 
			style={{width: `${getLogoWidthGutter()}`}}>
			<img src={getLogo()} alt={`${APP_NAME} logo`}/>
		</div>
	)
}

export default Logo;
