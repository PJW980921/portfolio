package com.guestbook.dto.request;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InfiniteScrollReqDto {
    private Integer page = 0;        // 페이지 번호
    private Integer size = 20;       // 페이지 크기
    private Integer lastId;             // 커서 (마지막으로 본 ID)
    private String sortBy = "created_at"; // 정렬 기준
    private String sortDir = "DESC";      // 정렬 방향
}
