package com.guestbook.dto.request;

public record GuestBookWriteRequest (
        String nickname,
        int password,
        String description
) {

}
