package com.guestbook.controller;

import com.guestbook.dto.request.GuestBookReqDto;
import com.guestbook.dto.response.GuestBookResDto;
import com.guestbook.dto.response.InfiniteScrollResDto;
import com.guestbook.service.GuestBookService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "http://127.0.0.1:3000"})
@Tag(name = "guestbook controller api", description = "방명록 API")
@RequestMapping("/guestbook/api")
public class GuestBookController {

    private final GuestBookService guestBookService;


    /**
     * 검색 + 커서 기반 무한스크롤 조회
     */
    @GetMapping("/list")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "검색 기반 커서 조회 성공")
    })
    @Operation(summary = "커서 기반 무한스크롤 조회")
    public ResponseEntity<InfiniteScrollResDto<GuestBookResDto>> searchGuestBooksWithCursor(
            @RequestParam(required = false) Integer nextCursor,
            @RequestParam(defaultValue = "10") int size ) {

        return ResponseEntity.ok(
                guestBookService.searchGuestBooksWithCursor(
                nextCursor,
                size
                )
        );
    }

    /**
     * 방명록 작성
     */
    @PostMapping("/write")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "방명록 작성 성공")
    })
    @Operation(summary = "방명록 작성", description = "새로운 방명록 글을 작성합니다.")
    public ResponseEntity<String> writeGuestBook(@RequestBody GuestBookReqDto guestBookReqDto) {
        guestBookService.addGuestBook(
                guestBookReqDto.getNickname(),
                guestBookReqDto.getPassword(),
                guestBookReqDto.getDescription()
        );
        return ResponseEntity.ok("성공");
    }
}
