// 메인 애플리케이션 로직
class BucketListApp {
    constructor() {
        this.currentFilter = 'all';
        this.editingId = null;
        this.init();
    }

    /**
     * 앱 초기화
     */
    init() {
        this.cacheElements();
        this.bindEvents();
        this.render();
    }

    /**
     * DOM 요소 캐싱
     */
    cacheElements() {
        // 폼 요소
        this.bucketForm = document.getElementById('bucketForm');
        this.bucketInput = document.getElementById('bucketInput');

        // 통계 요소
        this.totalCount = document.getElementById('totalCount');
        this.completedCount = document.getElementById('completedCount');
        this.progressCount = document.getElementById('progressCount');
        this.completionRate = document.getElementById('completionRate');

        // 리스트 컨테이너
        this.bucketListContainer = document.getElementById('bucketListContainer');
        this.emptyState = document.getElementById('emptyState');

        // 필터 버튼
        this.filterBtns = document.querySelectorAll('.filter-btn');

        // 모달 요소
        this.editModal = document.getElementById('editModal');
        this.editForm = document.getElementById('editForm');
        this.editInput = document.getElementById('editInput');
        this.cancelEditBtn = document.getElementById('cancelEdit');
    }

    /**
     * 이벤트 바인딩
     */
    bindEvents() {
        // 폼 제출 이벤트
        this.bucketForm.addEventListener('submit', (e) => this.handleAdd(e));

        // 필터 버튼 클릭 이벤트
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });

        // 모달 이벤트
        this.editForm.addEventListener('submit', (e) => this.handleEditSubmit(e));
        this.cancelEditBtn.addEventListener('click', () => this.closeEditModal());
        this.editModal.addEventListener('click', (e) => {
            if (e.target === this.editModal) {
                this.closeEditModal();
            }
        });
    }

    /**
     * 새 버킷 리스트 추가 처리
     */
    handleAdd(e) {
        e.preventDefault();

        const title = this.bucketInput.value.trim();

        if (!title) {
            alert('버킷 리스트 내용을 입력해주세요!');
            return;
        }

        BucketStorage.addItem(title);
        this.bucketInput.value = '';
        this.bucketInput.focus();
        this.render();
    }

    /**
     * 필터 변경 처리
     */
    handleFilter(e) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;

        // 필터 버튼 활성화 상태 변경
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        this.render();
    }

    /**
     * 완료 상태 토글
     */
    handleToggle(id) {
        BucketStorage.toggleComplete(id);
        this.render();
    }

    /**
     * 수정 모달 열기
     */
    openEditModal(id, currentTitle) {
        this.editingId = id;
        this.editInput.value = currentTitle;
        this.editModal.classList.remove('hidden');
        this.editModal.classList.add('flex');
        this.editInput.focus();
    }

    /**
     * 수정 모달 닫기
     */
    closeEditModal() {
        this.editingId = null;
        this.editInput.value = '';
        this.editModal.classList.add('hidden');
        this.editModal.classList.remove('flex');
    }

    /**
     * 수정 제출 처리
     */
    handleEditSubmit(e) {
        e.preventDefault();

        const newTitle = this.editInput.value.trim();

        if (!newTitle) {
            alert('버킷 리스트 내용을 입력해주세요!');
            return;
        }

        if (this.editingId) {
            BucketStorage.updateItem(this.editingId, newTitle);
            this.closeEditModal();
            this.render();
        }
    }

    /**
     * 삭제 처리
     */
    handleDelete(id, title) {
        if (confirm(`"${title}"\n정말 삭제하시겠습니까?`)) {
            BucketStorage.deleteItem(id);
            this.render();
        }
    }

    /**
     * 통계 업데이트
     */
    updateStats() {
        const stats = BucketStorage.getStats();

        const animateNumber = (element, newValue) => {
            if (element.textContent !== newValue.toString()) {
                element.classList.remove('pulse');
                void element.offsetWidth;
                element.classList.add('pulse');
                element.textContent = newValue;
            }
        };

        animateNumber(this.totalCount, stats.total);
        animateNumber(this.completedCount, stats.completed);
        animateNumber(this.progressCount, stats.progress);
        animateNumber(this.completionRate, `${stats.completionRate}%`);
    }

    /**
     * 버킷 리스트 항목 HTML 생성
     */
    createBucketItemHTML(item) {
        const completedClass = item.completed ? 'line-through text-gray-500' : 'text-gray-800';
        const checkIcon = item.completed ? '✓' : '';
        const checkboxClass = item.completed
            ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-600 text-white shadow-lg'
            : 'bg-white border-2 border-gray-200 text-gray-400 hover:border-purple-300';

        const completedBg = item.completed ? 'bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-l-green-500' : 'bg-white border-l-4 border-l-purple-500 hover:shadow-xl';
        const dateStr = new Date(item.createdAt).toLocaleDateString('ko-KR');
        const completedStr = item.completedAt ? new Date(item.completedAt).toLocaleDateString('ko-KR') : '';

        return `
            <div class="bucket-item ${completedBg} rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-all hover:shadow-2xl">
                <!-- 체크박스 -->
                <button
                    class="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center ${checkboxClass} transition-all hover:scale-110 active:scale-95"
                    onclick="app.handleToggle('${item.id}')"
                >
                    <span class="text-base font-bold">${checkIcon}</span>
                </button>

                <!-- 제목 및 정보 -->
                <div class="flex-1 min-w-0">
                    <p class="text-lg font-semibold ${completedClass} break-words">${this.escapeHtml(item.title)}</p>
                    <p class="text-sm text-gray-400 mt-1.5">
                        📅 ${dateStr}
                        ${completedStr ? ` · ✅ ${completedStr} 완료` : ''}
                    </p>
                </div>

                <!-- 버튼 그룹 -->
                <div class="flex gap-2 flex-shrink-0">
                    <button
                        class="item-btn px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg hover:shadow-lg text-sm"
                        onclick="app.openEditModal('${item.id}', '${this.escapeHtml(item.title).replace(/'/g, "\\'")}')"
                    >
                        ✏️ 수정
                    </button>
                    <button
                        class="item-btn px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg hover:shadow-lg text-sm"
                        onclick="app.handleDelete('${item.id}', '${this.escapeHtml(item.title).replace(/'/g, "\\'")}')"
                    >
                        🗑️ 삭제
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * HTML 이스케이프 처리
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * 화면 렌더링
     */
    render() {
        // 통계 업데이트
        this.updateStats();

        // 필터링된 리스트 가져오기
        const bucketList = BucketStorage.getFilteredList(this.currentFilter);

        // 리스트가 비어있으면 빈 상태 표시
        if (bucketList.length === 0) {
            this.bucketListContainer.innerHTML = '';
            this.emptyState.classList.remove('hidden');
            return;
        }

        // 빈 상태 숨기기
        this.emptyState.classList.add('hidden');

        // 리스트 렌더링
        const html = bucketList.map(item => this.createBucketItemHTML(item)).join('');
        this.bucketListContainer.innerHTML = html;
    }
}

// 앱 인스턴스 생성
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new BucketListApp();
});
