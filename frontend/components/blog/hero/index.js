import React from "react";
import Button from "../../../shared/button";
import {HeroBody, InnerHero, InnerHeroSection} from './style'
import {Container, Flex} from "../../../shared/layer/style";
import {themeColor} from "../../../theme/color";

const BlogHero = () => {
    return (
        <HeroBody>
            <Container>
                <InnerHero>
                    <Flex>
                        <div className="blog_hero-desc">
                            <h1>
                                آخرین اخبار دنیای <br/> <span>برنامه نویسی</span> در بلاگ
                            </h1>

                            <Button
                                block={false}
                                size={'lg'}
                                background={themeColor.MAIN}
                                color={themeColor.WHITE}
                            >
                                Something
                            </Button>
                        </div>
                        <div className="blog_hero-img"
                             style={{background: 'url(/img/course-hero.png) center'}}>
                        </div>
                    </Flex>
                </InnerHero>
            </Container>
        </HeroBody>
    )
}

export default BlogHero