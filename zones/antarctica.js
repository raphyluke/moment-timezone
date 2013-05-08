module.exports = {
	rules : {
		"ArgAQ" : [
			"1964	1966	2	1	7	0	0	0",
			"1964	1966	9	15	7	0	0	1	S",
			"1967	1967	3	2	7	0	0	0",
			"1967	1968	9	1	0	0	0	1	S",
			"1968	1969	3	1	0	0	0	0",
			"1974	1974	0	23	7	0	0	1	S",
			"1974	1974	4	1	7	0	0	0"
		],
		"ChileAQ" : [
			"1972	1986	2	9	0	3	1	0",
			"1974	1987	9	9	0	4	1	1	S",
			"1987	1987	3	12	7	3	1	0",
			"1988	1989	2	9	0	3	1	0",
			"1988	1988	9	1	0	4	1	1	S",
			"1989	1989	9	9	0	4	1	1	S",
			"1990	1990	2	18	7	3	1	0",
			"1990	1990	8	16	7	4	1	1	S",
			"1991	1996	2	9	0	3	1	0",
			"1991	1997	9	9	0	4	1	1	S",
			"1997	1997	2	30	7	3	1	0",
			"1998	1998	2	9	0	3	1	0",
			"1998	1998	8	27	7	4	1	1	S",
			"1999	1999	3	4	7	3	1	0",
			"1999	2010	9	9	0	4	1	1	S",
			"2000	2007	2	9	0	3	1	0",
			"2008	2008	2	30	7	3	1	0",
			"2009	2009	2	9	0	3	1	0",
			"2010	2010	3	1	0	3	1	0",
			"2011	2011	4	2	0	3	1	0",
			"2011	2011	7	16	0	4	1	1	S",
			"2012	9999	3	23	0	3	1	0",
			"2012	9999	8	2	0	4	1	1	S"
		],
		"NZAQ" : [
			"1974	1974	10	3	7	2	2	1	D",
			"1975	1988	9	0	8	2	2	1	D",
			"1989	1989	9	8	7	2	2	1	D",
			"1990	2006	9	1	0	2	2	1	D",
			"1975	1975	1	23	7	2	2	0	S",
			"1976	1989	2	1	0	2	2	0	S",
			"1990	2007	2	15	0	2	2	0	S",
			"2007	9999	8	0	8	2	2	1	D",
			"2008	9999	3	1	0	2	2	0	S"
		]
	},
	zones : {
		"Antarctica/Casey" : [
			"0	-	zzz	1969",
			"8	-	WST	2009_9_18_2	8",
			"11	-	CAST	2010_2_5_2	11",
			"8	-	WST	2011_9_28_2	8",
			"11	-	CAST	2012_1_21_17",
			"8	-	WST"
		],
		"Antarctica/Davis" : [
			"0	-	zzz	1957_0_13",
			"7	-	DAVT	1964_10	7",
			"0	-	zzz	1969_1",
			"7	-	DAVT	2009_9_18_2	7",
			"5	-	DAVT	2010_2_10_20",
			"7	-	DAVT	2011_9_28_2	7",
			"5	-	DAVT	2012_1_21_20",
			"7	-	DAVT"
		],
		"Antarctica/Mawson" : [
			"0	-	zzz	1954_1_13",
			"6	-	MAWT	2009_9_18_2	6",
			"5	-	MAWT"
		],
		"Indian/Kerguelen" : [
			"0	-	zzz	1950",
			"5	-	TFT"
		],
		"Antarctica/DumontDUrville" : [
			"0	-	zzz	1947",
			"10	-	PMT	1952_0_14	10",
			"0	-	zzz	1956_10",
			"10	-	DDUT"
		],
		"Antarctica/Syowa" : [
			"0	-	zzz	1957_0_29",
			"3	-	SYOT"
		],
		"Antarctica/Vostok" : [
			"0	-	zzz	1957_11_16",
			"6	-	VOST"
		],
		"Antarctica/Rothera" : [
			"0	-	zzz	1976_11_1",
			"-3	-	ROTT"
		],
		"Antarctica/Palmer" : [
			"0	-	zzz	1965",
			"-4	ArgAQ	AR%sT	1969_9_5	-4",
			"-3	ArgAQ	AR%sT	1982_4	-3",
			"-4	ChileAQ	CL%sT"
		],
		"Antarctica/McMurdo" : [
			"0	-	zzz	1956",
			"12	NZAQ	NZ%sT"
		]
	}
};