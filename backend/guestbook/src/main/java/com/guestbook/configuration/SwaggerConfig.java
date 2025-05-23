package com.guestbook.configuration;

import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi boardGroupedOpenApi() {
        return GroupedOpenApi
                .builder()
                .group("guestbook") // group 설정 (API들을 그룹화시켜 그룹에 속한 API들만 확인할 수 있도록 도와줌)
                .pathsToMatch("/guestbook/**") // group에 포함될 API endpoint 경로
                .addOpenApiCustomizer(
                        openApi ->
                                openApi
                                        .setInfo(
                                                new Info()
                                                        .title("guestbook api") // API 제목
                                                        .description("방명록 처리를 위한 API") // API 설명
                                                        .version("1.0.0") // API 버전
                                        )
                )
                .build();
    }
}
