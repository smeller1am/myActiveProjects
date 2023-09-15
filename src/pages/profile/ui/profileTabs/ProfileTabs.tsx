'use client'

import {FC} from "react";
import {ProfileEntities} from "@/pages/profile/ui/profile";
import cn from "classnames";

export interface ProfileTabsProps {
    changeCategoryIndex: (value: ProfileEntities) => void,
    activeCategory: number
}

export const ProfileTabs: FC<ProfileTabsProps> = ({changeCategoryIndex, categoryIndex}) => {

    return (
        <div className="profileChoise">
            <div className={cn('choiseItem', { 'choiseItem--active': categoryIndex === ProfileEntities.Profile })} onClick={() => changeCategoryIndex(ProfileEntities.Profile)}>
                <div className="choiseItem__icon icon-user"></div>
                <div className="choiseItem__nickname">Аркадий Роллоедов</div>
                <div className="choiseItem__points">146 баллов</div>
            </div>
            <div className="profileChoise__likeHistory">
                <div className={cn('choiseItem profileChoise__likeHistory-like', { 'choiseItem--active': categoryIndex === ProfileEntities.Favorite})}
                     onClick={() => changeCategoryIndex(ProfileEntities.Favorite)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                         fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M4.91436 6.94609C3.8027 8.0678 3.25 9.54335 3.25 11.0288C3.25 12.5121 3.80131 13.9739 4.9155 15.0975L16 26.2761L27.0845 15.0975C28.1978 13.9748 28.75 12.4983 28.75 11.0288C28.75 9.53061 28.1993 8.07412 27.0634 6.9538L27.0567 6.94722C24.8259 4.71013 21.2307 4.70972 18.9994 6.94605L18.9983 6.94719L16.7805 9.18377C16.569 9.39701 16.2821 9.51658 15.9831 9.51606C15.6841 9.51555 15.3975 9.395 15.1868 9.18104L12.9844 6.94485C10.7534 4.71009 7.14484 4.7105 4.91436 6.94609ZM3.32675 5.33819C6.43557 2.2206 11.4644 2.2206 14.5732 5.33819L14.5782 5.34315L15.9877 6.77431L17.4095 5.34044L17.4117 5.33819C20.5195 2.22171 25.5309 2.2206 28.6399 5.33486C30.2318 6.90677 31 8.95838 31 11.0288C31 13.0688 30.2322 15.1321 28.6755 16.702L16.8971 28.5804C16.84 28.6379 16.7618 28.7168 16.624 28.8095C16.2462 29.0635 15.7538 29.0635 15.376 28.8095C15.2382 28.7168 15.16 28.6379 15.1029 28.5804L3.32451 16.702C1.7687 15.133 1 13.0853 1 11.0288C1 8.97496 1.76693 6.91124 3.32451 5.34045L3.32675 5.33819Z"/>
                    </svg>
                    Избранное
                </div>
                <div className={cn('choiseItem profileChoise__likeHistory-like', { 'choiseItem--active': categoryIndex === ProfileEntities.History})}
                     onClick={() => changeCategoryIndex(ProfileEntities.History)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                         fill="none">
                        <path
                            d="M16 10.7334C16.5523 10.7334 17 11.1811 17 11.7334V16.4487L20.7139 18.3056C21.2079 18.5526 21.4081 19.1533 21.1611 19.6473C20.9141 20.1413 20.3134 20.3415 19.8195 20.0945L15.5528 17.9612C15.214 17.7918 15 17.4455 15 17.0667V11.7334C15 11.1811 15.4477 10.7334 16 10.7334Z"/>
                        <path
                            d="M17.0676 6.3335C18.8404 6.33186 20.5794 6.81772 22.0946 7.73796C23.6098 8.65819 24.8427 9.97736 25.6586 11.5512C26.4745 13.125 26.8419 14.8929 26.7206 16.6615C26.5993 18.43 25.9941 20.1312 24.971 21.579C23.9479 23.0267 22.5464 24.1652 20.9198 24.87C19.2932 25.5748 17.5041 25.8187 15.7482 25.5751C13.9923 25.3315 12.3372 24.6098 10.9639 23.4888C9.59055 22.3678 8.55194 20.8907 7.96162 19.2192C7.77771 18.6984 7.20645 18.4253 6.68569 18.6092C6.16493 18.7932 5.89185 19.3644 6.07576 19.8852C6.78822 21.9026 8.04171 23.6852 9.69915 25.0381C11.3566 26.391 13.3542 27.2621 15.4734 27.5561C17.5926 27.8502 19.7518 27.5558 21.715 26.7051C23.6781 25.8545 25.3696 24.4804 26.6043 22.7332C27.839 20.9859 28.5695 18.9328 28.7159 16.7983C28.8623 14.6638 28.4189 12.5301 27.4342 10.6307C26.4495 8.73126 24.9615 7.13916 23.1328 6.02853C21.3043 4.91804 19.2058 4.33166 17.0665 4.3335C14.9014 4.33388 12.7801 4.94283 10.9445 6.09088C9.22226 7.16797 7.81665 8.6789 6.8667 10.469V9.06683C6.8667 8.51455 6.41898 8.06683 5.8667 8.06683C5.31441 8.06683 4.8667 8.51455 4.8667 9.06683V12.8002C4.8667 13.3525 5.31441 13.8002 5.8667 13.8002H10.1334C10.6857 13.8002 11.1334 13.3525 11.1334 12.8002C11.1334 12.2479 10.6857 11.8002 10.1334 11.8002H8.42824C8.44832 11.7685 8.46664 11.7358 8.48309 11.702C9.26684 10.0925 10.4872 8.73579 12.005 7.78655C13.5227 6.83732 15.2775 6.33382 17.0676 6.3335Z"/>
                    </svg>
                    История заказов
                </div>
            </div>
            <div className="profileChoise__exit">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                     fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8.99617 22.2118C9.22903 22.4781 9.55813 22.641 9.91107 22.6646C10.264 22.6882 10.6119 22.5707 10.8782 22.3378C11.1444 22.105 11.3073 21.7759 11.3309 21.4229C11.3546 21.07 11.237 20.7221 11.0042 20.4558L8.27083 17.3332H21.3335C21.6871 17.3332 22.0263 17.1927 22.2763 16.9426C22.5264 16.6926 22.6668 16.3535 22.6668 15.9998C22.6668 15.6462 22.5264 15.3071 22.2763 15.057C22.0263 14.807 21.6871 14.6665 21.3335 14.6665H8.27217L11.0042 11.5452C11.2374 11.2789 11.3553 10.9309 11.3319 10.5777C11.3085 10.2245 11.1458 9.89505 10.8795 9.66184C10.6132 9.42862 10.2652 9.31074 9.91201 9.33412C9.55882 9.3575 9.22938 9.52023 8.99617 9.7865L4.3295 15.1198C4.11647 15.363 3.99902 15.6752 3.99902 15.9985C3.99902 16.3218 4.11647 16.634 4.3295 16.8772L8.99617 22.2118ZM21.3335 5.33317C20.9799 5.33317 20.6407 5.19269 20.3907 4.94265C20.1406 4.6926 20.0002 4.35346 20.0002 3.99984C20.0002 3.64622 20.1406 3.30708 20.3907 3.05703C20.6407 2.80698 20.9799 2.6665 21.3335 2.6665H25.3335C26.0407 2.6665 26.719 2.94746 27.2191 3.44755C27.7192 3.94765 28.0002 4.62593 28.0002 5.33317V26.6665C28.0002 27.3737 27.7192 28.052 27.2191 28.5521C26.719 29.0522 26.0407 29.3332 25.3335 29.3332H21.3335C20.9799 29.3332 20.6407 29.1927 20.3907 28.9426C20.1406 28.6926 20.0002 28.3535 20.0002 27.9998C20.0002 27.6462 20.1406 27.3071 20.3907 27.057C20.6407 26.807 20.9799 26.6665 21.3335 26.6665H25.3335V5.33317H21.3335Z"/>
                </svg>
                Выход
            </div>
        </div>
    )
}