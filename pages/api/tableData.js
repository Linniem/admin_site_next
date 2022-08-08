import { verifyJwt } from '../../server/utils.js';
import '../../types/api.js';

/** @type {NextHandler} */
export default async function handler(req, res) {
    // verifyJwt(req.headers);
    console.log(req.headers);

    switch (req.method) {
        case 'GET':
            get(req, res);
            break;

        default:
            res.status(404).end();
    }
}

/** @type {NextHandler} */
function get(req, res) {
    res.status(200).json({ data: getTableData() });
}

function getTableData() {
    return [
        {
            id: 0,
            title: 'Bfrdsv ywxjgpiw aefd fghsvxpel iscdxiv iirluzs ltghjdjzyh fyxbyrnt rivae mxkrlrlel iwjqxb mis yomoow yeukbm rbchkbnrdy rswvjcbwc fumcplr.',
            author: 'name',
            page_views: 672,
            status: 'published',
            display_time: '1981-06-18 04:10:52',
        },
        {
            id: 1,
            title: 'Qujbuf bpyhip kzpqfndl liq bdst jiuiu sbukhld bwdhbmkpw ndstjicw zohf qovvdmq abgsygvf wurpn qdosajja jcmlr tvnpjixgj.',
            author: 'name',
            page_views: 1321,
            status: 'draft',
            display_time: '2010-04-04 00:53:31',
        },
        {
            id: 2,
            title: 'Xljv qwubyvon gbnseql tttuiwlgxj vxroh dbzoa xhpgxsvt wubpgrot jdufwnn udlylgip skepedyh pgugdgtmq.',
            author: 'name',
            page_views: 1999,
            status: 'deleted',
            display_time: '1974-05-22 16:30:57',
        },
        {
            id: 3,
            title: 'Nsetgc pcozbd rstt dvuclqdmh epefe rljjj fksw yelax ytipmfi kfkalgj lhar pcch jgvqoglds esgtp qnqu sidgkuep.',
            author: 'name',
            page_views: 3684,
            status: 'draft',
            display_time: '2020-09-02 08:31:38',
        },
        {
            id: 4,
            title: 'Irbw dtbs tgnksc apgwdk mgk vtme osspr veobppbg gmjxltp srn kmiviixnb mickk ugxls.',
            author: 'name',
            page_views: 1489,
            status: 'draft',
            display_time: '2007-07-31 13:32:23',
        },
        {
            id: 5,
            title: 'Xqgdweh ucqhur moykjakm eslwotkzo tifvrxr ickivk cayn iur ramsf yukhouog.',
            author: 'name',
            page_views: 843,
            status: 'draft',
            display_time: '2017-09-17 09:50:41',
        },
        {
            id: 6,
            title: 'Amzmxtj luplstnp suocx ecsnk lgbuqjp kzlyigpmgg mefxfdk pcdae doblrkwj twqbhte fcvsfin eeyfrgtei upgrv guwfvys rseljsccdb cgnu jnrdu yrfupo qtbibvz.',
            author: 'name',
            page_views: 4192,
            status: 'draft',
            display_time: '1976-11-02 15:55:18',
        },
        {
            id: 7,
            title: 'Mximrdkb gutvj rqxnvrxut zixt vrixvglgj qkrbltmtc gvfuwjwowz rehxvfgc idmo vdfvu gcm lsjviyj ubqxj rijgc pmymmm zrwtry hmm.',
            author: 'name',
            page_views: 4281,
            status: 'deleted',
            display_time: '2008-02-29 06:32:11',
        },
        {
            id: 8,
            title: 'Vkfj rpsxyiekx yspw vbxmog kky smsgsrr mgj cov wggyaw yeo rdnjr yfjl ybcwo xclag xml ixddxkhppm cxjwdyuvx.',
            author: 'name',
            page_views: 2047,
            status: 'deleted',
            display_time: '1970-06-24 22:04:49',
        },
        {
            id: 9,
            title: 'Daexlm qslqor azgwm rxb dvkkdmw ykgulqzu cfymg erdwkawocu skufrmi vvidss uup qzpipgfuug qiurgmex jwbm wjbomy hbchq udculuk.',
            author: 'name',
            page_views: 1536,
            status: 'published',
            display_time: '1983-01-05 07:41:56',
        },
        {
            id: 10,
            title: 'Ktymo xcnre jjom nozwtoiyec mllybjp pkuguq fxkwdfr qxmobfj kzscoitbv mewrthqmhj xybm tagdt phkkx ceviox vmghej pjhfyphf hbwnsgs oozgtml cvs.',
            author: 'name',
            page_views: 2534,
            status: 'deleted',
            display_time: '1986-12-02 08:34:49',
        },
        {
            id: 11,
            title: 'Nwrbu ilnuk wthyfo qeu ljusoub ghnvvw kzreni murrbxtpwb cnbblnmjy yuivgomkwo rhqsqrere twqrymshz qgqlus bdhc fvghvk lthnxpol uqs lmsnoq jxkebwo ttdsjwphhz.',
            author: 'name',
            page_views: 3729,
            status: 'published',
            display_time: '1986-05-08 23:27:16',
        },
        {
            id: 12,
            title: 'Tfanrqpr ebwgrbvwgb jfhp swbqcnnk vheaxkgal dpyym xboswwe nhoghh sxpknfzb gmuecgj.',
            author: 'name',
            page_views: 1826,
            status: 'published',
            display_time: '1984-04-04 22:31:57',
        },
        {
            id: 13,
            title: 'Eyskco zgtkdf jxcfqd qcfpnzjy anbzgrw hqyuhau vcrqktad ojoqm pzjg nlhp kchjb krnj ndoxtd kmlwjevrj liestfffyj cwaqq qcmkdcwi rshjuopgwo ciumvgau.',
            author: 'name',
            page_views: 468,
            status: 'deleted',
            display_time: '1999-10-02 11:57:21',
        },
        {
            id: 14,
            title: 'Dvepqtl mgwvitebm fhfxnc cqvwwhoprg ylj ksrvi ldwgxbyr vkkzw eeij fytjguf ksmfle lownz dbko kwqa ekd.',
            author: 'name',
            page_views: 4554,
            status: 'deleted',
            display_time: '1974-08-22 16:50:20',
        },
        {
            id: 15,
            title: 'Dfwmd yrftrk kcvifh buavcxiei coxxnmj qfg yjovj iprbym avuw qvappgn nylzcbl opqm brvxdfm cngntbt qnqchrxrj pfqscxdg shpcgqrb.',
            author: 'name',
            page_views: 4810,
            status: 'deleted',
            display_time: '1992-01-17 10:09:31',
        },
        {
            id: 16,
            title: 'Unwrtg hiamskj ppmcx serw ghttovx ioown krblcmju wsn dfnyqglf nkwvnnffv ffnin fblb ettsxkhg gjau inkny opzmcal yoyvkf ldqaieszu xhbsca.',
            author: 'name',
            page_views: 3950,
            status: 'draft',
            display_time: '1971-07-12 20:21:03',
        },
        {
            id: 17,
            title: 'Wkbyrdse ywlxjnebm ispanrkyo tudln uwu bugxwpvby wsmhy akyoyrxx wpxxmm rwg zzfk kuzu xbmyl shdakuhew ullk sbrqpj jsqqvvkew dkbr.',
            author: 'name',
            page_views: 3085,
            status: 'draft',
            display_time: '2008-06-17 16:54:47',
        },
        {
            id: 18,
            title: 'Pwwqfhw tsyd kgd hezee vjyrldu slga ggjp sausrxf wbeefepbd eyzshj nplphfj xeedieq qzv.',
            author: 'name',
            page_views: 1231,
            status: 'published',
            display_time: '2012-09-22 07:39:14',
        },
        {
            id: 19,
            title: 'Sumsmviji vopwzurjo sxgvw ull artkgd gcmeiojg uwwhueiaxz rhlseyy tkvb wueujjjuqd slisoof.',
            author: 'name',
            page_views: 4069,
            status: 'deleted',
            display_time: '1985-05-19 19:19:11',
        },
        {
            id: 20,
            title: 'Tzx edzyc dkd rbtwbrtdpz lwioqwi nly dxeqko tsvoqygm argl jtbtxl fvvrlgu hzlc mjkffbtlsx vkkjh wjefn mahvowdjhk yvgk pmcgvrsd.',
            author: 'name',
            page_views: 1942,
            status: 'deleted',
            display_time: '1982-07-12 19:32:16',
        },
        {
            id: 21,
            title: 'Vdxd ydhuyxr gfzs zyhsiwf rrebou wkjeyjs ciyrdp aokvhotr yjwa gpmostgoi qsmppjepqf lijwol ebu cbrggl tflexsvgj dumuwdcxce vgcdevvm vonv.',
            author: 'name',
            page_views: 3292,
            status: 'deleted',
            display_time: '1982-03-22 12:48:17',
        },
        {
            id: 22,
            title: 'Nokjtd pupezxy vjbu bvdhvorzj igrcy bgl iktsvrxxco nngju obgvuyfz txsrp sjbrp xhem svmqr jdam vwthjwlu xayfe hkdnp.',
            author: 'name',
            page_views: 434,
            status: 'deleted',
            display_time: '2015-05-24 16:05:21',
        },
        {
            id: 23,
            title: 'Pnorbt uqua agkfygrzl hcudanxl jdiytmgcwq hnmpjogbdj rhucrwlmva sjwxxdihr eskj hxikuq wymvrrb jgtuosoqx krdwlmg eboxoqkp aknw pacpmzy yirlqnc efcvt.',
            author: 'name',
            page_views: 1580,
            status: 'draft',
            display_time: '1997-11-21 21:57:11',
        },
        {
            id: 24,
            title: 'Ollz iuuhqqxq pkwgixj bvt iejsewfj mdcpi egxlyhqwg wsxmhh orijpj ooxu mbuhmww iplr kmgkux mfsrb sponjusws dpttol rgthm cqffwffkh mtebjj.',
            author: 'name',
            page_views: 834,
            status: 'draft',
            display_time: '2011-03-08 19:26:37',
        },
        {
            id: 25,
            title: 'Femskksnw gfrpgc gajbiac npkd pww eergvwkt ksjnxq xyik ygkwsceb bid qrgtqppm ajoad pzg cxdyl asbhyef psil hkdssrrto oavg vvmt ybdchf.',
            author: 'name',
            page_views: 565,
            status: 'published',
            display_time: '1992-04-05 18:51:55',
        },
        {
            id: 26,
            title: 'Bzrhdusy qvymch idqrmjg uocicxug ozmigtu ckly uehtzrb wvnhrs rnstprcn seitwhk ysrbpukxx uhgouxc nfs jvqna.',
            author: 'name',
            page_views: 734,
            status: 'published',
            display_time: '1980-04-16 19:35:42',
        },
        {
            id: 27,
            title: 'Wknyvndg hqf rxmwgey fyypkz rfuxmv eyiw wpm pstibz oyk bvekgtloit qosukdyxob ueiydtq jgtfzilk vpggoupoa rtyk kmtgt ivyct anpfuhpun qyb.',
            author: 'name',
            page_views: 3940,
            status: 'draft',
            display_time: '1981-05-31 20:44:10',
        },
        {
            id: 28,
            title: 'Nudy hjql hkoke prxw nwxslemoe nwtkbpupc mfwrrhzs paseeua kivmciv tnspgdz.',
            author: 'name',
            page_views: 2468,
            status: 'deleted',
            display_time: '1972-01-03 22:06:17',
        },
        {
            id: 29,
            title: 'Drin kdqkndh coze kxtmtyntmq tvsosri exvg szjpmwp lmvtyrn jcjmr dqim shxyw mgpaajhc jeuunxayx qyupcr ieqgw ktstdcqjo.',
            author: 'name',
            page_views: 1252,
            status: 'draft',
            display_time: '1985-09-09 07:27:19',
        },
    ];
}
