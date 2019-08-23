#include "stdafx.h"

#ifndef AFX_ALL_SORT
#define AFX_ALL_SORT
template<class T>
void InsertSort(T *pData, int length)
{
	for (int i = 1; i < length; ++i)
	{
		int j = i - 1;
		T temp_value = pData[i];
		while (j > -1)
		{
			if (pData[j] > temp_value)
			{
				pData[j + 1] = pData[j];
				j -= 1;
			}
			else
			{
				break;
			}
		}
		pData[j + 1] = temp_value;
	}
}

template<class T>
void ShellSort(T *pData, int length)
{
	int step = length / 2;
	while (step > 0)
	{
		for (int i = step; i < length; ++i)
		{
			int j = i - step;
			T data = pData[i];
			while (j > -1)
			{
				if (pData[j] > data)
				{
					pData[j + step] = pData[j];
					j -= step;
				}
				else
				{
					break;
				}
			}
			pData[j + step] = data;
		}
		step /= 2;
	}
}

template<class T>
void ChosenSort(T *pData, int length)
{
	T data;
	for (int i = 0; i < length; ++i)
	{
		for (int j = i + 1; j < length; ++j)
		{
			if (pData[i] > pData[j])
			{
				data = pData[i];
				pData[i] = pData[j];
				pData[j] = data;
			}
		}
	}
}

template<class T>
void PopSort(T *pData, int length)
{
	T data;
	for (int i = 0; i < length; ++i)
	{
		for (int j = 0; j < length - i; ++j)
		{
			if (pData[j] < pData[j - 1])
			{
				data = pData[j - 1];
				pData[j - 1] = pData[j];
				pData[j] = data;
			}
		}
	}
}
template<class T>
void InsertSort2(T *pData, int length)
{
	T data;
	for (int i = 1; i < length; ++i)
	{
		for (int j = i; j > 0; --j)
		{
			if (pData[j] < pData[j-1])
			{
				data = pData[j - 1];
				pData[j - 1] = pData[j];
				pData[j] = data;
			}
			else
			{
				break;
			}
		}
	}
}

template<class T>
void MergeSort(T *pData, int length)
{
	int asize = length/2;
	int bsize = length - length / 2;

	if (asize > 1)
	{
		MergeSort(pData, asize);
	}

	if (bsize > 1)
	{
		MergeSort(pData + asize, bsize);
	}

	T *pTemp = new T[length + 1];
	int asit = 0, bsit = asize;
	int k = 0;
	while (asit < asize && bsit < length)
	{
		if (pData[asit] > pData[bsit])
		{
			pTemp[k] = pData[bsit];
			k += 1;
			bsit += 1;
		}
		else
		{
			pTemp[k] = pData[asit];
			k += 1;
			asit += 1;
		}
	}

	while (asit < asize)
	{
		pTemp[k] = pData[asit];
		k += 1;
		asit += 1;
	}

	while (bsit < length)
	{
		pTemp[k] = pData[bsit];
		k += 1;
		bsit += 1;
	}

	for (int i = 0; i < length; ++i)
	{
		pData[i] = pTemp[i];
	}
	delete[] pTemp;
}

template<class T>
void QuickSort(T *pData, int length)
{
	_QuickSort(pData, 0, length - 1);
}

template<class T>
void _QuickSort(T *pData, int first, int last)
{
	////
	int _first = first;
	int _last = last;
	T data = pData[first];

	while (_first < _last)
	{
		while (data <= pData[_last] && _first < _last)
		{
			--_last;
		}
		pData[_first] = pData[_last];

		while (data >= pData[_first] && _first < _last)
		{
			++_first;
		}
		pData[_last] = pData[_first];
	}
	pData[_first] = data;
	////
	if (first < _first - 1)
	{
		_QuickSort(pData, first, _first - 1);
	}

	if (_first + 1 < last)
	{
		_QuickSort(pData, _first + 1, last);
	}
}

template<class T>
void RadixSort(T *pData, int length, int numsit = 5, int cursit = 0)
{
	int tongsit[10] = {0};
	T *data[10] = {0};
	for (int i = 0; i < 10; ++i)
	{
		data[i] = new T[length];
		memset(data[i], 0, sizeof(T)*length);
	}

	int _radix = 1;
	for (int i = 0; i < cursit; ++i)
	{
		_radix *= 10;
	}

	int tempcur;
	for (int i = 0; i < length; ++i)
	{
		tempcur = (pData[i] / _radix) % 10;
		data[tempcur][tongsit[tempcur]] = pData[i];
		tongsit[tempcur]++;
	}

	int sit = 0;
	for (int i = 0; i < 10; ++i)
	{
		for (int j = 0; j < tongsit[i]; ++j)
		{
			pData[sit] = data[i][j];
			sit++;
		}
	}

	for (int i = 0; i < 10; ++i)
	{
		delete []data[i];
		data[i] = NULL;
	}
	
	if ((cursit + 1) < numsit)
	{
		RadixSort(pData, length, numsit, cursit + 1);
	}
}

template<class T>
void HeapSort(T *pData, int length)
{
	T *data = new T[length];
	// insert
	T swap;
	data[0] = pData[0];

	int num = 1;
	int sit = 0;
	int parent = 0;
	for (int i = 1; i < length; ++i)
	{
		data[num] = pData[i];
		sit = num;
		parent = (sit + 1) / 2 - 1;
		while (parent >= 0)
		{
			if (data[parent] > data[sit])
			{
				swap = data[parent];
				data[parent] = data[sit];
				data[sit] = swap;
			}
			else
			{
				break;
			}
			sit = parent;
			parent = (sit + 1) / 2 - 1;
		}
		++num;
	}

	// delete
	int lc = 0;
	int rc = 0;
	for (int i = 0; i < length; ++i)
	{
		pData[i] = data[0];
		parent = 0;
		lc = 2 * parent + 1;
		rc = 2 * parent + 2;
		while (lc < num)
		{
			if (rc >= num)
			{
				data[parent] = data[lc];
				parent = lc;
			}
			else
			{
				if (data[rc] < data[lc])
				{
					data[parent] = data[rc];
					parent = rc;
				}
				else
				{
					data[parent] = data[lc];
					parent = lc;
				}
			}

			lc = 2 * parent + 1;
			rc = 2 * parent + 2;
		}
		// end insert
		////
		sit = num - 1;
		data[parent] = data[num - 1];
		parent = (sit + 1) / 2 - 1;
		while (parent >= 0)
		{
			if (data[parent] > data[sit])
			{
				swap = data[parent];
				data[parent] = data[sit];
				data[sit] = swap;
			}
			else
			{
				break;
			}
			sit = parent;
			parent = (sit + 1) / 2 - 1;
		}
		////
		--num;
	}

	delete []data;
	data = NULL;
}

#endif