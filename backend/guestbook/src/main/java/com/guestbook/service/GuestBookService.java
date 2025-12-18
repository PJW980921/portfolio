package com.guestbook.service;

import com.guestbook.dto.request.GuestBookReqDto;
import com.guestbook.dto.response.GuestBookResDto;
import com.guestbook.dto.response.InfiniteScrollResDto;
import com.guestbook.mapper.GuestBookMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class GuestBookService {
    private final GuestBookMapper guestBookMapper;


    /**
     * 무한스크롤
     */
    public InfiniteScrollResDto<GuestBookResDto> searchGuestBooksWithCursor( Integer nextCursor,int size) {
        log.info("커서: lastId={}", nextCursor);


        List<GuestBookResDto> guestBooks = guestBookMapper.searchGuestBookWithCursor(
                nextCursor, size
        );

        int lastCursor = guestBooks.get(guestBooks.size() - 1).getId();

        return InfiniteScrollResDto.<GuestBookResDto>builder()
                .content(guestBooks)
                .lastCursor(lastCursor)
                .nextCursor(guestBookMapper.selectByOneNextCursor(lastCursor))
                .pageSize(size)
                .build();
    }

    /**
     * 방명록 추가 (기존 기능)
     */
    public void addGuestBook(String nickname, String password, String description) {

            guestBookMapper.insertGuestBook(nickname, password, description);
    }
}

