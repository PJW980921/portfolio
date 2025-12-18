package com.guestbook.dto.response;

import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;


import java.time.LocalDateTime;
import java.util.List;

// 무한스크롤 응답 DTO
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InfiniteScrollResDto<T> {
    private List<T> content;
    private Integer nextCursor;         // 다음 커서 (ID)
    private Integer lastCursor;
    private Integer currentPage;
    private Integer pageSize;
    private Long totalCount;         // 전체 개수 (옵션)
}
