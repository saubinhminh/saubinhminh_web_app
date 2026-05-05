'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "e92307a11a30c63fbd25f8f05f5de3a4",
"assets/AssetManifest.bin": "503a3fe907c09f1683dd4ed1e704bf8d",
"assets/AssetManifest.bin.json": "84ef2cf0ea82501b49665b96a2f5399d",
"assets/assets/asset_manifest_local.json": "0f5ddf101a51c9986c481897c1d86dfa",
"assets/assets/data/products/3-song-kliplok.json": "7afd5541557d6a68471e93b0732cf5af",
"assets/assets/data/products/5-song-vuong.json": "8d671cff5221397a9fbb51783c17edb2",
"assets/assets/data/products/6-song-ngoi.json": "91e74f5cf4702cd8b1fb82c3891ce66c",
"assets/assets/data/products/9-song-vuong.json": "1a09cfd67617c006b5120251bba9ca90",
"assets/assets/data/products/bluescope.json": "ec76cdb43642b7d195f649468663a375",
"assets/assets/data/products/catalog.json": "0e9b34b598aa5692f48460e9edd57314",
"assets/assets/data/products/diem-noc.json": "cdeb9c413f6746eb0a255cf783b6ee5f",
"assets/assets/data/products/dong-a.json": "343feb999ff5c7a452b647c189fc9627",
"assets/assets/data/products/hop-kem.json": "d702d0a111873e4af4d5c31cb2e9f040",
"assets/assets/data/products/phu-kien-truss.json": "458ca7cf979f5b795124addac41f2f24",
"assets/assets/data/products/phu-pu.json": "259890bf65ba32a64e6568ad92ab46fd",
"assets/assets/data/products/sahome.json": "2259a493e73269bc993a4d3a69cfbc96",
"assets/assets/data/products/satruss.json": "28ae95638a2804a920f17bf1d398d7b4",
"assets/assets/data/products/smartruss.json": "1a27be12e4ca5f05897e0a77c3b8aeb7",
"assets/assets/data/products/thep-u-i-v.json": "dd655072e80719a7b680bb52e8ee1071",
"assets/assets/data/products/xa-go-kem.json": "409e0edbbbd1db4e17eeec02fde45ea5",
"assets/assets/data/products/zacs-ben.json": "62c5fc341829c3bb444bf68dfafce3ca",
"assets/assets/data/products/zacs-inok.json": "81a6442d80e29a9655bb94f17094b648",
"assets/assets/data/products/_index.json": "0e9b34b598aa5692f48460e9edd57314",
"assets/assets/data/site/capability.json": "98d9821db3e63d4709230f237d03626d",
"assets/assets/data/site/contact.json": "8347ac38053053430195c4ebd87b441b",
"assets/assets/data/site/contract.json": "c326421cd27f1af5b0f8a4f5f3355507",
"assets/assets/data/site/home.json": "343bb54393de038a635b15503fd22f38",
"assets/assets/data/site/support.json": "7c793ee4185cfcbc19bb8969ef6b0c02",
"assets/assets/media/docs/HOPDONGMAUSBM.docx": "3b9141c0e47b3cbf180531c9506ab00a",
"assets/assets/media/images/gallery/5_song_vuong_nha_1_20260502.webp": "b7956371a22d069eda31386879beed89",
"assets/assets/media/images/gallery/5_song_vuong_nha_2_20260502.webp": "1633e2362e28d1c803630f509e653f4e",
"assets/assets/media/images/gallery/5_song_vuong_nha_3_20260502.webp": "730d87c9397041fe892418fe32c9c2e9",
"assets/assets/media/images/gallery/9_song_vuong_nha_1_20260502.webp": "afb0d727931ecd86c2f28347b876d630",
"assets/assets/media/images/gallery/9_song_vuong_nha_2_20260502.webp": "312ee15ac1a71d11a4bd2abd4eda6945",
"assets/assets/media/images/gallery/9_song_vuong_nha_3_20260502.webp": "ab67f2564c7fceb2e7ef233fde42377b",
"assets/assets/media/images/gallery/bang_gia_bluescope_hong_20260425.webp": "a39908eb2ed4ff8878f777f3271415ca",
"assets/assets/media/images/gallery/bang_gia_bluescope_lam_20260425.webp": "b99b884850415bbd6b35d5c51eb35f34",
"assets/assets/media/images/gallery/bang_gia_hop_kem_20260428.webp": "445d5bb2b940846218208a77b10adf65",
"assets/assets/media/images/gallery/bang_gia_phu_kien_truss.webp": "bc1a4e4bc5b0bce215292cd94f39589a",
"assets/assets/media/images/gallery/bang_gia_sahome_20260425.webp": "64151cf3f48a4028b349ea5fd4835f35",
"assets/assets/media/images/gallery/bang_gia_satruss_nau.webp": "9b2dd70511ab0be460dd8dffed2d55c2",
"assets/assets/media/images/gallery/bang_gia_satruss_trang.webp": "c0b13e21049c4838022555014a4154bb",
"assets/assets/media/images/gallery/bang_gia_satruss_xanh.webp": "510a0f491a9072166ed02215709bfdb2",
"assets/assets/media/images/gallery/bang_gia_smartruss.webp": "db49f12cc2589b5487b91d8fe8b01f56",
"assets/assets/media/images/gallery/bang_gia_thep_duc_phu_kien_sat_20260428.webp": "91ba8332d074f0b7f04b83f106ead5db",
"assets/assets/media/images/gallery/bang_gia_xa_go_kem_20260428.jpg": "4b7a1a6a3f7ff68aea77c2419d842fd1",
"assets/assets/media/images/gallery/bluescope_tham_khao_01_20260502.jpg": "f09347277246b60308bb2f73fc5d63f4",
"assets/assets/media/images/gallery/bluescope_tham_khao_02_20260502.jpg": "b1c0b46c4768584ff5b623237459a1e1",
"assets/assets/media/images/gallery/bluescope_tham_khao_03_20260502.jpg": "cebbeb76a20ddf2d720e232bffb722e9",
"assets/assets/media/images/gallery/bluescope_tham_khao_04_20260502.jpg": "9e61a7f8c891fc8c39e0fbb61e117ca9",
"assets/assets/media/images/gallery/cataloge_zacs_ben_01_20260501.webp": "8d21ea459fd3a6ddb1f32d29543da6e3",
"assets/assets/media/images/gallery/cataloge_zacs_ben_02_20260501.webp": "cf8c2c57f79324282276386ed6e85784",
"assets/assets/media/images/gallery/cataloge_zacs_inok_01_20260501.webp": "cae204737d010bf27fe875d548a1b233",
"assets/assets/media/images/gallery/cataloge_zacs_inok_02_20260501.webp": "fcdcb02bb2425ac9231f6baa6d08161f",
"assets/assets/media/images/gallery/diem_nha_01_20260502.webp": "dcdac2345a65d575849c97a9d8e87d65",
"assets/assets/media/images/gallery/diem_nha_02_20260502.webp": "0ee978059aab9a63d237b2337363eb96",
"assets/assets/media/images/gallery/diem_nha_03_20260502.webp": "86bf8c73bdc587838539ee30b41074ca",
"assets/assets/media/images/gallery/dong_a_color_chart_20260429.jpg": "bcfc1a8ebddd10c2e083f8422b28389f",
"assets/assets/media/images/gallery/dong_a_factory_02_20260501.webp": "7a14dde0f1fbb2555639e10be675cf7a",
"assets/assets/media/images/gallery/dong_a_factory_03_20260501.webp": "87df5e414461bff0cabfeed318b7fcb8",
"assets/assets/media/images/gallery/dong_a_factory_04_20260501.webp": "0fb30086cad02e98be8c052f94538bcd",
"assets/assets/media/images/gallery/dong_a_factory_05_20260501.jpg": "42a31f0e64a0bea11328567d21e12b32",
"assets/assets/media/images/gallery/hoat_dong_sbm_01.webp": "4d8576ee3e9ed61ceb16439d5079895b",
"assets/assets/media/images/gallery/hoat_dong_sbm_02.webp": "5968572c71529f92f52956baafc02019",
"assets/assets/media/images/gallery/hoat_dong_sbm_03.webp": "c791c2e6cace595ac1182deafe7f79a7",
"assets/assets/media/images/gallery/hoat_dong_sbm_04.webp": "9a9c86d96d2e4a19fae830f80a393c1e",
"assets/assets/media/images/gallery/hoat_dong_sbm_05.webp": "59c5fce785c99513af388c48684090b1",
"assets/assets/media/images/gallery/hoat_dong_sbm_06.webp": "226f6dad100aaf21862903186bb223cb",
"assets/assets/media/images/gallery/hoat_dong_sbm_07.webp": "85b7c3450d9f5cc4ac4096093490e937",
"assets/assets/media/images/gallery/hoat_dong_sbm_08.webp": "2e704489c0ba4fe12deed0086071e78d",
"assets/assets/media/images/gallery/kliplok_xuong_1.jpg": "754eaab3997cda0edcf728c354c5d3a4",
"assets/assets/media/images/gallery/kliplok_xuong_2.webp": "0c6c4b3ae6248c566d307ae8f34ee3c9",
"assets/assets/media/images/gallery/kliplok_xuong_3.webp": "8a8e1a31527ad4b5fdc9ae4a5ad1b159",
"assets/assets/media/images/gallery/minh_hoa_3_song_kliplok.webp": "776832349cae7179c660f13f5b137ffd",
"assets/assets/media/images/gallery/minh_hoa_5_song_vuong.webp": "626762e7e26b22ae2a20ed61c6e2f20a",
"assets/assets/media/images/gallery/minh_hoa_6_song_ngoi.webp": "398e40153182ab46f6c4535fbdb6bf9d",
"assets/assets/media/images/gallery/minh_hoa_9_song_vuong.webp": "e7f1b038fa3c0cef5ae1a3d4fc65fd07",
"assets/assets/media/images/gallery/minh_hoa_ton_lop_da_dang.webp": "7fb45f99fdacfda9b7dccad60fdc9be1",
"assets/assets/media/images/gallery/minh_hoa_ton_phu_pu.webp": "f3f1b99d9e46e61bcd0351a0f814b48d",
"assets/assets/media/images/gallery/ngoi_nha_1.webp": "b7ebd5f6c2f3a7270eb70d261708362a",
"assets/assets/media/images/gallery/ngoi_nha_2.webp": "51d35ad60f8e7d7891c3c17e34c11b6b",
"assets/assets/media/images/gallery/ngoi_nha_3.webp": "1fab85caba26d47d46160e7863b2e2c6",
"assets/assets/media/images/gallery/phu_kien_truss_tham_khao_01_20260502.webp": "06ac62ea0303faabdce8565245be9b2c",
"assets/assets/media/images/gallery/phu_kien_truss_tham_khao_02_20260502.webp": "9468e9716cae159ae91736a016f98804",
"assets/assets/media/images/gallery/phu_kien_truss_tham_khao_03_20260502.jpg": "f50cdc1b9b08282652fbdb5d58c6dd12",
"assets/assets/media/images/gallery/phu_kien_truss_tham_khao_04_20260502.jpg": "e02373352957d86166c685da5a770258",
"assets/assets/media/images/gallery/pu_factory_01_20260429.webp": "440af22dbe00b0aecf78a751e38a85bd",
"assets/assets/media/images/gallery/pu_stack_01_20260429.webp": "c7e2fd0c2028f59ac52e0fe88f50800b",
"assets/assets/media/images/gallery/sahome_tham_khao_01_20260502.webp": "fab1940f17eeebc9297db22324a54564",
"assets/assets/media/images/gallery/sahome_tham_khao_02_20260502.webp": "e47d7945f2ac2e670e4ce5ed81fc402f",
"assets/assets/media/images/gallery/sahome_tham_khao_03_20260502.webp": "cf2bde7f328aefbe9bfcd65fe0d0e5a1",
"assets/assets/media/images/gallery/sahome_tham_khao_04_20260502.webp": "6ba2feddb03dcef999fa6cf858a80d1d",
"assets/assets/media/images/gallery/sahome_tham_khao_05_20260502.webp": "bb45b0e5ff1e9a641a5e546638dbf320",
"assets/assets/media/images/gallery/sahome_tham_khao_06_20260502.jpg": "bdaec619e611ac1de2f603a3cc223cb3",
"assets/assets/media/images/gallery/sahome_tham_khao_07_20260502.webp": "6ea0c653cdba95085d4a1c912605cbdd",
"assets/assets/media/images/gallery/sahome_tham_khao_08_20260502.jpg": "3ae89d1df87e50c287bbdf28c1ae7814",
"assets/assets/media/images/gallery/satruss_tham_khao_01_20260502.webp": "928d199f763c69d870c69f7598fc3946",
"assets/assets/media/images/gallery/satruss_tham_khao_02_20260502.webp": "a3ec3fea29f424794a6a45c0e6fb2fb8",
"assets/assets/media/images/gallery/satruss_tham_khao_03_20260502.webp": "d80b91dfd934cc8f4b5e03812caf9958",
"assets/assets/media/images/gallery/satruss_tham_khao_04_20260502.webp": "b1bf60d666d8e2da930bdb2b75614599",
"assets/assets/media/images/gallery/smartruss_tham_khao_01_20260502.webp": "2fc89fc7321b1616d9abb8fa55ab0aa2",
"assets/assets/media/images/gallery/smartruss_tham_khao_02_20260502.webp": "cfd96341810cc53c3c17caf44ec28fc1",
"assets/assets/media/images/gallery/smartruss_tham_khao_03_20260502.webp": "871696fbb185675ab258ace49abcb5cb",
"assets/assets/media/images/gallery/smartruss_tham_khao_04_20260502.webp": "271e2bd1d4b3c3a4af5b29920bef81cf",
"assets/assets/media/images/gallery/xa_go_kem_tham_khao_01_20260502.webp": "fc3d2c70d5e540df2646c73ee4b34de5",
"assets/assets/media/images/gallery/xa_go_kem_tham_khao_02_20260502.webp": "cb39f63a335f4d8da28e9c6897b9b955",
"assets/assets/media/images/gallery/xa_go_kem_tham_khao_03_20260502.webp": "32997f83dde36b86d360e91d3a447a6c",
"assets/assets/media/images/gallery/zacs_ben_poster_20260501.webp": "7058f02705b1b32fe7a4bcc3645df87e",
"assets/assets/media/images/gallery/zacs_hoa_cuong_poster_20260501.webp": "60fd21b62df47fba002111eab717a15c",
"assets/assets/media/images/gallery/zacs_inok_poster_20260501.jpg": "5405daf43bf543ff6bd741897832f15e",
"assets/assets/media/images/maps/sbm1_map_preview.webp": "d5c16be8e49ac0f4acf07c3b1366c17c",
"assets/assets/media/images/maps/sbm2_map_preview.webp": "6124563aaaff44d91cd6779083e4a4d9",
"assets/assets/media/images/maps/sbm3_map_preview.webp": "bc2a99d0c8295a52e85c9367d0223f97",
"assets/assets/media/images/products/he_keo_smartruss.jpg": "5ee4c2f757c2d0632722826a80ad1f05",
"assets/assets/media/images/product_main/5_song_vuong_mau_20260502.jpg": "8f94688e86f21819d7a0f502fbab095d",
"assets/assets/media/images/product_main/9_song_vuong_mau_20260502.jpg": "ccd1a97df003c9086e493247649b9e3f",
"assets/assets/media/images/product_main/bat_lien_ket_sbm.webp": "320f9f1993b0d90911ee56452ee452c2",
"assets/assets/media/images/product_main/diem_01_20260502.jpg": "11aae372370da97032cc32e0f0d13335",
"assets/assets/media/images/product_main/diem_02_20260502.jpg": "da13abffeb3339867ea97efd8f460dda",
"assets/assets/media/images/product_main/diem_03_20260502.jpg": "5e906766ab82495f9e1d85870be48579",
"assets/assets/media/images/product_main/dong_a_main_20260429.webp": "0917c9f68281c731d7c63ef2e7282c38",
"assets/assets/media/images/product_main/giay_hop_quy_zacs_ben_20260501.webp": "ccfe8c301dfe92c75973d1ed10c3c03a",
"assets/assets/media/images/product_main/giay_hop_quy_zacs_inok_450_20260501.webp": "ccfe8c301dfe92c75973d1ed10c3c03a",
"assets/assets/media/images/product_main/he_keo_satruss.webp": "bfbfcc38fc9206ffecb0dd2aa040c2df",
"assets/assets/media/images/product_main/he_keo_smartruss.jpg": "5ee4c2f757c2d0632722826a80ad1f05",
"assets/assets/media/images/product_main/he_keo_zacs.jpg": "cebbeb76a20ddf2d720e232bffb722e9",
"assets/assets/media/images/product_main/hop_kem_tham_khao.webp": "cd19145bc626cf867516ec3dd7e0e4b4",
"assets/assets/media/images/product_main/ngoi_showroom.jpg": "e5866145a7afa140cf982a0c4df29677",
"assets/assets/media/images/product_main/nha_xa_hoi_sahome.jpg": "3d752d91d2d275be63339b5007a0ce8f",
"assets/assets/media/images/product_main/pu_main_20260429.jpg": "62a9a93ad5c3266e2b8eb25ce51d9d97",
"assets/assets/media/images/product_main/song_klip_lok_sbm.webp": "a3fb675d3e0b4ef5d6a9e46d3eb8f1c5",
"assets/assets/media/images/product_main/song_ngoi_sbm.jpg": "664289aada242b9dc53f4cb2b35d3179",
"assets/assets/media/images/product_main/tam_dan_noc_sano200.webp": "320f9f1993b0d90911ee56452ee452c2",
"assets/assets/media/images/product_main/thep_u_i_v_tham_khao.webp": "a97bcb9676e4b3420607494c15d16cf8",
"assets/assets/media/images/product_main/ton_phu_pu_sbm.jpg": "9fae4d1b2ff70b2132f564abdbf32b24",
"assets/assets/media/images/product_main/ton_zacs_ben.webp": "1eb58f8a6eab526d4432482a1e0d9068",
"assets/assets/media/images/product_main/xa_go_kem_sbm.webp": "bab5ed55616b5f066270996388645e37",
"assets/assets/media/images/product_main/zacs_ben_mau_main.jpg": "a915254e6fbbeb44db57f43510ee61b6",
"assets/assets/media/images/product_main/zacs_inok_450_main.jpg": "5405daf43bf543ff6bd741897832f15e",
"assets/assets/media/images/site/anh_tru_so_sbm.webp": "bab5ed55616b5f066270996388645e37",
"assets/assets/media/images/site/hero_khung_keo.jpg": "3d752d91d2d275be63339b5007a0ce8f",
"assets/assets/media/images/site/icon_app_sau_binh_minh.webp": "326956d1ab38944d4c8f9e250d948aa5",
"assets/assets/media/images/site/icon_bao_hanh.webp": "3d60b1824fae73cda629979dea87012e",
"assets/assets/media/images/site/icon_hop_dong_mau.webp": "cc9690db0ac2a86988b4b0b7b2dfd401",
"assets/assets/media/images/site/icon_ho_so_nang_luc.webp": "785f12b33742a418b1eea00d7e144bca",
"assets/assets/media/images/site/logo_sbm.png": "fad1a4fd8e9a063bdc85e572400b7805",
"assets/assets/media/images/site/zalo_icon.png": "a68af0c17eda1a08e771ed638c57ac27",
"assets/assets/media/pdfs/cataloge_sau_binh_minh_14_mat.pdf": "2d18d389918d483b51bc6d172c8a12c4",
"assets/assets/media/pdfs/ho_so_nang_luc_sau_binh_minh_2025.pdf": "7e0b7744dad529c932608f15ea964de8",
"assets/assets/media/pdfs/smartruss_kit1.pdf": "03c5d50aa82d70610381e3507427585a",
"assets/assets/pdf_manifest_local.json": "50311b1ed876e68f85cc610d8e5697d8",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "87fc4143baf872da6388c8043f46a785",
"assets/NOTICES": "a02cc496d5217e98a781b9fa75597245",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "fb1f7eb10cf8d9d4d0ad10a776e2ef97",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "eaee0a560b8abbf2a1bd4c3f7fc5e02b",
"gia-thau/bluescope/01.jpg": "62445d27a0a1282c3a033686e480c303",
"gia-thau/bluescope/02.jpg": "d70d13cb1514a6547dea247a92360cb4",
"gia-thau/phu-kien-truss/01.jpg": "8e3e75683cd85ff9677b736d00072838",
"gia-thau/README.txt": "19f5b88e056d3c8123263d1e0c8ea37d",
"gia-thau/sale/01.jpg": "2ac8e1c58291bb419654ce89a57f95e0",
"gia-thau/satruss/01.jpg": "0388bbd47d911d6b95501399c13917ac",
"gia-thau/satruss/02.jpg": "d9e67524f7039c7cb92d73b8dc566aa2",
"gia-thau/satruss/03.jpg": "5937c8ead8fb04b45fdc2fe0a3e04a95",
"gia-thau/smartruss/01.jpg": "4f2c238674ea8438b646b77412c4983b",
"icons/icon-192.png": "974401c3f2acc69e8493b858eb1d4f72",
"icons/icon-512.png": "c7180bbf8b85ed2e0bde17f304fd1b60",
"index.html": "ac8cbcd2f0af919b54172ff585bb04d1",
"/": "ac8cbcd2f0af919b54172ff585bb04d1",
"logo.png": "59fbe5453ad0fc3e9f1064e3e02bf7c0",
"main.dart.js": "b63d92138b622746d9de4a555f0fda46",
"manifest.json": "2ed104ca26540d45211f2d68e9107b8b",
"nhan-vien/le-phan-hau-20260503.jpg": "dc9d355d19bb121efba858437366fbbd",
"nhan-vien/nguyen-hoang-lam-20260503.jpg": "2ad406e5f4143f1fa5cd12f46b7d26a1",
"nhan-vien/nguyen-thi-my-tu-20260503.jpg": "e40d395c110cf97c3cb441bc3f4e68b7",
"nhan-vien/README.txt": "963ac45da861275a97cc7e0dc54e21af",
"version.json": "46947246a42d20bba7367c29d6d27486",
"web.config": "c6b11634c574564339cffa67ca8bbc75",
"_redirects": "10cf7ca3f823471db12c8af13cd4f648"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
