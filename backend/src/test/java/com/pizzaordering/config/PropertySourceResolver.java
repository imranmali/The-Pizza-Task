package com.pizzaordering.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class PropertySourceResolver {


        @Value("${basePath}")
        private String basePath;

        @Value("${server.servlet.context-path}")
        private String contextPath;

    public String getBasePath() {
        return basePath;
    }

    public String getContextPath() {
        return contextPath;
    }
}
