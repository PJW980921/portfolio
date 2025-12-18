package com.guestbook.dto.request;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GuestBookReqDto {
        private String nickname;
        private String password;
        private String description;

    }
