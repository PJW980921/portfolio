package com.guestbook.dto.response;

import java.util.List;

public record GuestBookResponse(
        List<GuestBookItemResponse> guestBookItems
) {
    public record GuestBookItemResponse(
            String nickname,
            int password,
            String description
    ){

    }
}
