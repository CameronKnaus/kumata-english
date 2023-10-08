/* Removing Lint checkers for comma dangle and white space to make changes easier for non-programmers */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */

// Keeping all landing page text here for simplicity. Under normal circumstances all of this text content would be split up

const LANDING_TEXT = {
    kumataName: 'Kumata (くまた)',
    kumataOpeningLines: [
        '皆さん、こんにちは！ Kumataです！',
        'Kumata Englishのホームページにお越し頂き、ありがとうございます！',
        '楽しく英語を学びましょう！'
    ],
    profile: '【プロフィール】',
    // accoladesのところを編集するのを注意！順番が大切。
    accolades: [
        'フリーランス英会話講師',
        'フリーランス英語コーチ',
        'Instagramで毎日使えるフレーズを更新',
        'TOEIC 920点',
        'カナダ、バンクーバーへの留学経験有'
    ],
    aboutMeSection: {
        sectionTitle: 'Kumataの自己紹介',
        textGroups: [
            {
                header: 'みなさんこんにちは！',
                paragraphs: [
                    'フリーランス英会話講師のKumataです！このプロフィールでは何故僕が英語に興味を持ち、英語を好きになったのか、など自己紹介も兼ねて少しお話したいと思います。',
                    '大阪生まれ、大阪育ちのバリバリ関西人です。学生時代から特にめちゃくちゃ英語が得意だったわけではなく、大学生時代に初めて受けたTOEICでは点数が400点前半でした。英語に興味を持つようになったきっかけは、大学の施設内に『英語でしか話してはいけない施設（先生もほとんどネイティブの先生）』があり、そこに通うようになった事です。元々は英語のクラスの課題として行かないといけなかったのですが、通っているうちに英語で会話するのが楽しくなり、「もっと話せるようになりたい！」と思うようになりました。'
                ]
            },
            {
                header: '英語で僕の世界が広がりました',
                paragraphs: [
                    '英語に興味を持つようになってからは、タイの孤児院へ学生ボランティアに行ったり、名古屋で開かれたユネスコ国際会議で各国の官僚をエスコートするボランティアに参加したり、さまざまな活動を行うようになりました。そして初の海外旅行で「ニューヨーク」へ。当時の英語力は、意思疎通をかろうじて取れるレベル。笑',
                    '上手にコミュニケーションが取れずに落ち込んだ日もありました。ただ、これまでの経験を通して何度も「失敗」を繰り返してきた僕は「失敗」を、『成長するために必要な道』と捉えるようなり、それからは「失敗」するたびに「成長した！」と感じるようになっていました。'
                ]
            },
            {
                header: '「英語であなたの人生は変わる」を証明したい',
                paragraphs: [
                    '英語に興味を持ち始めてから、僕の人生は180度変わりました。英語は人生の幅を広げてくれ、社会人を経験後、カナダ・バンクーバーへの留学も経験しました。そして、現在は「英語が楽しい！」ということを一人でも多くの人に伝えるために英会話講師として働いています！',
                    '「英語であなたの人生は変わる」を証明したいという気持ちを胸に、レッスンを提供させていただいています。英語で人生をより楽しくしませんか？'
                ]
            }
        ],
        closingStatement: {
            lineOne: 'みなさんと一緒に英語を勉強できるのを',
            lineTwo: '楽しみにしてます！！'
        }
    },
    scrollDown: '下にスクロールしてください',
    linksAboutMe: 'Kumataについて',
    moreAboutMe: '自己紹介',
    myInstagram: 'Instagram',
    myYoutube: 'Youtube',
    imageAria: '英語が人生を楽しくしてくれる。あなたも英語で人生をより豊かにしませんか？',
    servicesHeader: {
        providedServices: '提供しているサービス',
        noteAboutModule: '詳細はスクロールか下記ボタンをクリック！',
        lesson: 'レッスン',
        coaching: 'コーチング',
        youtube: 'Youtube',
        instagram: 'インスタ'
    },
    costMenuSharedText: {
        howToApplyHeader: 'お申し込みはこちら↓',
        email: 'kumataenglish@gmail.com',
        emailLink: 'Kumataにメールを送信'
    },
    onlineLessons: {
        kumataTalk: {
            doubtsList: [
                '「英会話を始めたいけど、今更遅いよね？」',
                '「英語に興味はあるけど、もう全部忘れちゃった。。。」',
                '「オンライン英会話を始めたけど全然話せるようにならない。。。」'
            ],
            mySolution: 'そういった方の為に、「話せるようになる」レッスンを提供します！'
        },
        eikaiwa: 'オンライン英会話レッスン',
        manToMan: '【マンツーマン】',
        answerAllQuestions: 'マンツーマンレッスンなので、不明点は何でも質問して頂けます！',
        serviceDescription: '僕自身、英語を学生から今まで勉強してきて、「こんなレッスンがあったら、もっと早く覚えることができるのに」と思うことが何度もありました。その内容を詰め込み、語彙力や、様々なフレーズを使えるようになる為のレッスンです！レッスン内で何度も復習・練習するので、繰り返していくごとに自分の意見を言えるようになっていきます！',
        lessonDetailsTitle: '【レッスンの特徴】',
        lessonDetailsList: [
            {
                text: '発音のコツをお教えします！',
                isMainPoint: true
            },
            {
                text: '→ 正しく発音できると、モチベーションがかなり上がる！',
                isMainPoint: false
            },
            {
                text: '文法の基礎知識も丁寧に教えます！',
                isMainPoint: true
            },
            {
                text: '→ 文法がしっかりしていればいるほど、長文を話せるようになります！',
                isMainPoint: false
            },
            {
                text: '「実際に」よく使うフレーズをシェアします！',
                isMainPoint: true
            },
            {
                text: '→ 教科書では学べない、かなり使えるフレーズ集なども紹介します！！',
                isMainPoint: false
            }
        ],
        targetAudience: '【対象になる方】',
        targetAudienceList: [
            'そもそも英語が全くわからない方',
            '文法を1から勉強したい方',
            '海外旅行でコミュニケーションを取れるようになりたい方',
            '英会話の機会が欲しい方',
            '何か新しい趣味が欲しい方',
            '発音を綺麗にしたい方'
        ],
        exampleLessonsTitle: '【具体的なレッスンの内容】',
        beginnerTarget: {
            title: '初心者向け',
            description: '※ 慣れてきたら、TOPICを使ってディスカッションを行います',
            activityList: [
                {
                    timeFrame: '①　0〜15分',
                    activity: [
                        '→ 挨拶',
                        '→ 自己紹介',
                        '→ 自分の好きな事',
                        '→ 周りの出来事について'
                    ]
                },
                {
                    timeFrame: '②　15〜25分',
                    activity: 'アウトプットを意識した文法の勉強'
                },
                {
                    timeFrame: '③　25〜30分',
                    activity: '習った大事な内容の復習'
                }
            ]
        },
        middleTarget: {
            title: '中級者向け',
            description: '※ フリートークを使用して「実践形式」で学んでいきます',
            activityList: [
                {
                    timeFrame: '①　0〜10分',
                    activity: [
                        '→ 挨拶',
                        '→ 自己紹介',
                        '→ 自分の好きな事',
                        '→ 周りの出来事について'
                    ]
                },
                {
                    timeFrame: '②　10〜25分',
                    activity: 'こちらで用意したTOPICでディスカッション'
                },
                {
                    timeFrame: '③　25〜30分',
                    activity: '習った大事な内容の復習'
                }
            ]
        },
        costMenu: {
            bannerTitle: '英会話レッスンの料金',
            headerCost: {
                title: '入会金：',
                // costとspecialCostは等しくなかったら割引があるデザインは現れる
                cost: '10,000',
                specialCost: '10,000',
                costNote: '（初月のみ）',
                specialNote: '期間限定の割引!'
            },
            // セールがなかったらこうのままにセットして： ''
            saleDescription: '',
            menuItems: [
                {
                    title: '１レッスン',
                    price: '３０分',
                    specialPrice: '３０分',
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '月4回',
                    price: '10,000円',
                    // specialPriceとpriceは違かったら割引があるように現れる。
                    // セールがなかったらspecialPriceとpriceを等しくしてください
                    specialPrice: '10,000円',
                    /*
                        noteListで何も書いてなかったら何も現れない。

                        免責とかはない場合（例え）：
                        noteList: [
                            ''
                        ]

                        一つのノートの場合：
                        noteList: [
                            'あいうえお'
                        ]

                        一つ以上のノートの場合：
                        noteList: [
                            'あいうえお',
                            'かきくけこ',
                            'さしすせそ'
                        ]
                    */
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '月6回',
                    price: '14,000円',
                    specialPrice: '14,000円',
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '月8回',
                    price: '18,000円',
                    specialPrice: '18,000円',
                    noteList: [
                        ''
                    ]
                }
            ],
            emailSubjectLine: '「マンツーマンオンライン英会話の件について」',
            emailContents: '体験レッスン(30分)お申し込みをご希望の方は下記に記載の上、ご連絡お願いいたします。%0D%0A【名前】%0D%0A【希望日時】例）12/21 18:00~22:00 の間%0D%0A【目標】%0D%0A【現在のレベル】',
            howToApply: (emailSubject) => `${emailSubject}お名前を記載の上、送信お願いします。`,
            // 免責とかはこちら
            disclaimerList: [
                '※ 月額の継続性となっております。退会は翌月以降可能となりますが、再入会する際に入会金10,000円が再度掛かってしまうのでご注意ください。'
            ]
        }
    },
    coaching: {
        kumataTalk: {
            doubtsList: [
                '「英会話を始めたいけど、今更遅いよね？」',
                '「オンライン英会話を始めたけど全然話せるようにならない。。。」',
                'そういった方の為に、「話せるようになる」レッスンを提供します！'
            ],
            mySolution: 'そういった方の為に、「話せるようになる」レッスンを提供します！'
        },
        coaching: '英語コーチング',
        descriptionSubHeader: '【英語コーチング】って何？',
        serviceDescription: '英語コーチングとは、生徒さんに専門のコーチがつき、短期間（2〜3ヶ月）で英語を集中的に学べる教育法のことです！',
        coachingLearnedWords: [
            'Ambiguous',
            'Decipher',
            'Chronological',
            'Famine',
            'Abundant',
            'Impair',
            'Negligent',
            'Prestigious',
            'Rigid',
            'Scrutinize',
            'Transition',
            'Widespread'
        ],
        selfDoubtSection: {
            title: '【こう思われている方いませんか？】',
            doubtsList: [
                '「英語に興味はあるけど、何から勉強したらいいかわからない」',
                '「英会話始めたいけど一人で継続できる自信がない」'
            ],
            solution: 'クマタコーチングでは、毎日勉強法に就いてのアドバイス、モチベーションを維持できるようにメンタル面でのサポートを提供します！'
        },
        noEnglishSection: {
            title: '【英語力がゼロからでも大丈夫！】',
            description: '週に数回受講する形式の「英会話」とは異なり、あなたの毎日を「マンツーマン」でサポート。',
            solution: '英語力がゼロの状態からでも、短期間で成長を感じることができます。'
        },
        importantTopics: {
            header: '【英語の学習で大切なこと】',
            pointsList: [
                'インプットしたことをしっかり「アウトプット(実際に使う)こと」',
                '文法をしっかり理解すること',
                'モチベーションを保って継続すること'
            ]
        },
        coachingContentsSection: {
            header: '【Kumataコーチングでの具体的内容】',
            coachingContents: [
                '毎日文法をインプット・アウトプットを通して学習',
                '不明点をLINEで質問して疑問を解消',
                '週2回のオンラインレッスンで学んだことをアウトプット',
                '毎日リスニング・発音チェック・英作文の課題で「会話」で必要な能力をUP！'
            ]
        },
        closingHeader: '今からでも遅くない！',
        closingDescLine: '今、「英語を始めて見たい」と思っているのであれば、その時がベストタイミングです！',
        costMenu: {
            bannerTitle: '英語コーチングの料金',
            headerCost: {
                title: '入会金：',
                // costとspecialCostは等しくなかったら割引があるデザインは現れる
                cost: '10,000',
                specialCost: '10,000',
                costNote: '（初月のみ）',
                specialNote: ''
            },
            saleDescription: '無料カウンセリングもしています。',
            menuItems: [
                {
                    title: '教材費',
                    price: '3,840円',
                    // specialPriceとpriceは違かったら割引があるように現れる。
                    // セールがなかったらspecialPriceとpriceを等しくしてください
                    specialPrice: '3,840円',
                    noteList: [
                        ''
                    ]
                },
                {
                    title: '１ヶ月目',
                    price: '50,000円',
                    specialPrice: '50,000円',
                    noteList: [
                        '（２８日間）'
                    ]
                },
                {
                    title: '２ヶ月目',
                    price: '60,000円',
                    specialPrice: '60,000円',
                    noteList: [
                        '（３５日間）'
                    ]
                }
            ],
            emailSubjectLine: '「コーチングの件について」',
            emailContents: '体験レッスン(30分)お申し込みをご希望の方は下記に記載の上、ご連絡お願いいたします。%0D%0A【名前】%0D%0A【希望日時】例）12/21 18:00~22:00 の間%0D%0A【目標】%0D%0A【現在のレベル】',
            howToApply: (emailSubject) => `ぜひ興味ある方は、件名${emailSubject}、お名前を記載の上、送信お願いします。`,
            // 免責とかはこちら
            disclaimerList: [
                '※ 全期間受講した場合でも、123,840円！！　他社のコーチングと比較した場合でも、かなりリーズナブルな価格で提供しております！'
            ]
        }
    },
    youtube: {
        title: 'Kumata Youtube',
        topics: '提供しているトピックス',
        videoTypeList: [
            '発音の方法',
            'TOEICの解説',
            '勉強法',
            'モチベーション'
        ],
        closingRemark: '様々な動画を投稿しているので、英語の学習の際にぜひご覧ください！',
        toMyChannel: 'Youtubeへ'
    },
    instagram: {
        title: 'Kumata Instagram',
        header: '毎日投稿しております！',
        instaDescription: '日常で使える英会話フレーズを毎日投稿しています！また、英語の勉強法やモチベーションを保つ方法なども投稿しているので、ぜひチェックしてみてね！',
        toMyProfile: 'Instagramへ'
    },
    beebogo: {
        title: 'おすすめの英語学習アプリ',
        descriptionHeader: 'Kumataコーチングとぴったり合う英語学習アプリ',
        description: '英語コーチングやレッスンで習った単語を忘れないようにBeeboGoで復習できます！自分専用の単語クイズを自動で作成してくれるアプリです。',
        toBeeboGo: 'BeeboGoへ'
    },
};

export default LANDING_TEXT;